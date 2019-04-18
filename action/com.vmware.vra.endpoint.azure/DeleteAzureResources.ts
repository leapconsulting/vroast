/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function DeleteAzureResources(requestData?: Properties, apiVersion?: string): void {var REQUEST_ALLOCATION_DATA_KEY = "_allocation";
var REQUEST_RESOURCE_GROUP_KEY = "resourceGroupName";
var REQUEST_TAG_KEY = "tag";
var REQUEST_VM_NAME_KEY = "vmName";
var REQUEST_VM_LOCATION = "vmLocation"
var REQUEST_SUBSCRIPTION_ID_KEY = "subscriptionId";

var VIRTUAL_MACHINE_TYPE = "Microsoft.Compute/virtualMachines";
var VIRTUAL_NETWORK_INTERFACE_TYPE = "Microsoft.Network/networkInterfaces";

System.log("[DeleteAzureResources] Starting a delete process of Azure Virtual Machine together with related resources where applicable.");

var storageBlobSuffix = ""
var location = requestData.get(REQUEST_VM_LOCATION);

if (location == "chinaeast" || location == "chinanorth") {
   storageBlobSuffix = ".blob.core.chinacloudapi.cn";
} else if (location == "germanycentral" || location == "germanynortheast") {
   storageBlobSuffix = ".blob.core.cloudapi.de";
} else {
   storageBlobSuffix = ".blob.core.windows.net";
}

var connection = com.vmware.vra.endpoint.azure.getConnectionBySubscriptionId(requestData.get(REQUEST_SUBSCRIPTION_ID_KEY));

var resourceOperations = connection.resourceClient.resourcesOperations;

var tag = requestData.get(REQUEST_TAG_KEY);
System.log("[DeleteAzureResources] Received tag is: " + tag);
if (tag == null) {
    var allocationData = requestData.get(REQUEST_ALLOCATION_DATA_KEY);
    var vmName = requestData.get(REQUEST_VM_NAME_KEY);
    tag = com.vmware.vra.endpoint.azure.generateTag(allocationData, vmName);
    System.log("[DeleteAzureResources] Tag was not passed as part of the request data, so it was generated based on the allocation data. The result is: " + tag);
}

var resourceGroupName = requestData.get(REQUEST_RESOURCE_GROUP_KEY);
// The following method returns resources from all kind of resource types except ResourceGroup.
var resources = getResourcesByTag(tag);
if (resources && resources.length > 0) {

    var availabilitySetReference;
    var vmDeleted = false;

    //We need to ensure the order of resource removal, so call the function for each of the resource types.
    deleteOrUpdateAllResourcesByType(resources, VIRTUAL_MACHINE_TYPE, tag, connection);
    deleteOrUpdateAllResourcesByType(resources, VIRTUAL_NETWORK_INTERFACE_TYPE, tag, connection);

    // Process AvailabilitySet and ResourceGroup only if there was a VM among the resources that was successfully deleted.
    if (vmDeleted) {
        deleteOrUpdateAvailabilitySet(connection, resourceGroupName, availabilitySetReference);
        deleteOrUpdateResourceGroup(resourceGroupName, connection);
    }
} else {
    System.log("[DeleteAzureResources] There are no resources with the passed tag in the subscription. No action is taken.");
}

//---------------------------------------------------------------------------

function getResourcesByTag(tagName) {

    var resourceListParameters = new AzureResourceListParameters() ;
    resourceListParameters.tagName = tagName;

    var resourceListResponse = resourceOperations.list(resourceListParameters);

    return resourceListResponse.resources;
}

function deleteOrUpdateAllResourcesByType(resources, resourceType, tag, connection) {
    for (var resource of resources) {
        if(resource.type == resourceType) {
            deleteOrUpdateGenericResource(resource, tag, connection);
        }
    }
}

function deleteOrUpdateGenericResource(resource, vmTag, connection) {

    System.log("[DeleteAzureResources] Processing resource with type " + resource.type);
    if (resourceGroupName == null) {
        resourceGroupName = extractResourceGroupFromId(resource.id);

        if (resourceGroupName == null) {
            System.warn("[DeleteAzureResources] Cannot process resource with id '" + resource.id + "' and name '" + resource.name +
                "' because resource group name cannot be extracted from the id and is missing in the requestData.");
            return;
        }
    }

    var operations = null;
    switch (resource.type) {
        case VIRTUAL_MACHINE_TYPE:
            operations = connection.computeClient.virtualMachinesOperations;
            var vm = operations.get(resourceGroupName, resource.name).virtualMachine;
            availabilitySetReference = vm.availabilitySetReference;

            var storageAccountDiskManager = getStorageAccountDiskManager();
            storageAccountDiskManager.extractVmDiskInformation(vm);
            System.log("[DeleteAzureResources] Deleting VM with name '" + vm.name + "' ...");
            deleteSpecificResource(vm, tag, resourceGroupName, operations);

            vmDeleted = true;

            storageAccountDiskManager.deleteAllVmDisks(connection);
            break;
        case VIRTUAL_NETWORK_INTERFACE_TYPE:
            operations = connection.networkClient.networkInterfacesOperations;
            var nic = operations.get(resourceGroupName, resource.name).networkInterface;
            deleteSpecificResource(nic, tag, resourceGroupName, operations);
            break;

        // For the unknown resources, just skip processing for now.
        default:
            System.warn("[DeleteAzureResources] Unsupported resource type for update/delete during VirtualMachine deletion. The resource with id '" + resource.id +
                "' will remain in the Azure subscription.");
            break;
    }
}

function deleteSpecificResource(resource, vmTag, resourceGroupName, operations) {

    if (resource == null) {
        return;
    }

    try {
        operations.delete(resourceGroupName, resource.name);
        System.log("[DeleteAzureResources] Resource with name " + resource.name + " was successfully deleted from the subscription.");
    } catch (error) {
        // If something happened during VM removal, exit the action with the received error.
        if (resource.type == VIRTUAL_MACHINE_TYPE) {
            System.error("[DeleteAzureResources] Could not delete virtual machine with name '" + resource.name + "' because of the error: " + error);
            System.error("[DeleteAzureResources] Delete Azure Resources cannot continue!");
            throw error;
        }
        // For all of the rest resource types, just log the error and continue.
        System.warn("[DeleteAzureResources] Could not process resource of type '" + resource.type + "' and name '" + resource.name + "' because of the error: " + error);
    }
}

function extractResourceGroupFromId(id) {
    var resGroupName = null;
    var indx = id.indexOf("/resourceGroups/") + 16;
    if (indx != "-1") {
        var subst = id.substring(indx);
        resGroupName = subst.substring(0, subst.indexOf('/'));
        System.log("[DeleteAzureResources] Extracted resource group name from resource with id '" + id + "' is: " + resGroupName);
    } else {
        System.warn("[DeleteAzureResources] Cannot extract resource group from the resource with id: " + id);

    }
    return resGroupName;
}

function deleteOrUpdateAvailabilitySet(connection, resourceGroupName, availabilitySetReference) {

    if (availabilitySetReference && availabilitySetReference.referenceUri && availabilitySetReference.referenceUri != "") {
        // The AvailabilitySetReference has a form like this:
        // /subscriptions/<subscriptionId>/resourceGroups/<resourceGroupName>/providers/Microsoft.Compute/availabilitySets/<availabilitySetName>
        var avSetName = availabilitySetReference.referenceUri.split("availabilitySets/")[1];
        System.log("[DeleteAzureResources] Processing AvailabilitySet with name '" + avSetName + "'...");
        try {
            var avSetUsage = com.vmware.vra.endpoint.azure.updateAvailabilitySetReferenceCountTag(connection, resourceGroupName, avSetName, -1);
            if (avSetUsage == 0) {
                var avSetOperations = connection.computeClient.availabilitySetsOperations;
                System.log("[DeleteAzureResources] AvailabilitySet with name '" + avSetName + "' is no more used so will be deleted from subscription.");
                avSetOperations.delete(resourceGroupName, avSetName);
                System.log("[DeleteAzureResources] AvailabilitySet with name '" + avSetName + "' was successfully deleted from subscription.");
            }
        } catch (error) {
            System.warn("[DeleteAzureResources] Could not process AvailabilitySet with name '" + avSetName + "' in resource group '" + resourceGroupName +
                "' because of the error: " + error);
        }
    }
}

function deleteOrUpdateResourceGroup(resGroupName, connection) {

    try {
        var remainedVMs = com.vmware.vra.endpoint.azure.updateResourceGroupReferenceCountTag(connection, resGroupName, -1, apiVersion);
        if (remainedVMs == 0) {
            // If none vRA specific tags are left, this means that the resource group is no more used and can be deleted from Azure Subscription.
            var resGroupOperations = connection.resourceClient.resourceGroupsOperations;
            resGroupOperations.delete(resGroupName);
            System.log("[DeleteAzureResources] ResourceGroup with name '" + resGroupName + "' is no more used, thus was deleted from the subscription.");
        }
    } catch (error) {
        System.warn("[DeleteAzureResources] Could not process resource group with name '" + resGroupName + "' because of the error: " + error);
    }
}

function getStorageAccountDiskManager() {

    function DiskInfo(uri) {
        System.log("[DeleteAzureResources] Parsing disk information for disk with URI: " + uri);
        // The dirk URI has a form like this:
        // https://<storage account name>.blob.core.windows.net/<container name>/<vhd filename>.vhd
        var parsed = uri.split("/");

        this.storageAccountName = parsed[2].substring(0, parsed[2].indexOf(storageBlobSuffix));
        this.containerName = parsed[3];
        this.vhdFileName = parsed[4];
        System.log("[DeleteAzureResources] Parsed disk information contains: StorageAccountName = " + this.storageAccountName + ", ContainerName = " + this.containerName + ", vhd = " + this.vhdFileName);
    };

    DiskInfo.prototype = {
        constructor: DiskInfo
    };

    var storageAccountDiskManager = {
        // This is used as a multi value map with key: Storage Account Name and value: DiskInfo[].
        storageAccountNamesToDiskInfoMap: new Properties(),

        extractVmDiskInformation: function(vm) {
            this.addDiskUriInternal(vm.osDiskUri);

            for (var dataDisk of vm.storageProfile.dataDisks) {
                this.addDiskUriInternal(dataDisk.virtualHardDisk.uri);
            }
        },

        deleteAllVmDisks: function(connection) {
            var storageAccounts = com.vmware.vra.endpoint.azure.findStorageAccounts(connection, this.storageAccountNamesToDiskInfoMap.keys);

            for (var storageAccount of storageAccounts) {
                var diskInfos = this.storageAccountNamesToDiskInfoMap.get(storageAccount.name);
                for (var diskInfo of diskInfos) {
                    System.log("[DeleteAzureResources] Deleting VM disk with vhd '" + diskInfo.vhdFileName + "' from StorageAccount '" + storageAccount.name + "'.");
                    try {
                        storageAccount.deleteBlob(diskInfo.containerName, diskInfo.vhdFileName);
                        System.log("[DeleteAzureResources] Deleted successfully.");
                    } catch (errorVhd) {
                        System.error("[DeleteAzureResources] Could not delete virtual disk '" + diskInfo.vhdFileName + "' that resides in container '" + diskInfo.containerName
                                + "' part of storage account with name '" + diskInfo.storageAccountName +"'. The server returned error: ");
                        System.error(errorVhd);
                        System.warn("[DeleteAzureResources] You will have to remove this vhd file manually through Azure portal.");
                    }
                }
            }
        },

        addDiskUriInternal: function(uri) {
            var diskInfo = new DiskInfo(uri);

            var diskInfos = this.storageAccountNamesToDiskInfoMap.get(diskInfo.storageAccountName);
            if (diskInfos == null) {
                diskInfos = new Array();
                this.storageAccountNamesToDiskInfoMap.put(diskInfo.storageAccountName, diskInfos);
            }

            diskInfos.push(diskInfo);
            System.log("[DeleteAzureResources] Added vhd file '" + diskInfo.vhdFileName + "' for a removal after the VM is deleted.");
        }
    };

    return storageAccountDiskManager;
}
}
}
