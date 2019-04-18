/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function cleanUpAzureResources(connection?: Azure.Connection, apiVersion?: string, resourceGroupName?: string, availabilitySetName?: string, vmName?: string, nicNames?: Array<string>, location?: string): void {if (!resourceGroupName) {
    log("'resourceGroupName' is not set. CleanUp operation cannot continue.");
    return;
}

var resourceGroup = connection.getResourceGroupByName(resourceGroupName);
if (!resourceGroup) {
    log("Resource Group with name '" + resourceGroupName + "' does not exist in the connection '" + connection.displayName + "'. Aborting cleanUp operation.");
    return;
}

var storageBlobSuffix = ""

if (location == "chinaeast" || location == "chinanorth") {
   storageBlobSuffix = ".blob.core.chinacloudapi.cn";
} else if (location == "germanycentral" || location == "germanynortheast") {
   storageBlobSuffix = ".blob.core.cloudapi.de";
} else {
   storageBlobSuffix = ".blob.core.windows.net";
}

var azureModule = com.vmware.vra.endpoint.azure;

if (vmName) {
    log("Cleaning up Virtual Machine with name '" + vmName + "'.");
    var vm = resourceGroup.getVirtualMachineByName(vmName);
    if (vm) {
        var storageAccountDiskManager = getStorageAccountDiskManager();
        storageAccountDiskManager.extractVmDiskInformation(vm);
        log("Deleting VM with name '" + vm.name + "' ...");
        try {
            connection.computeClient.virtualMachinesOperations.delete(resourceGroupName, vmName);
            log("Virtual Machine with name '" + vm.name + "' was deleted successfully.");
            storageAccountDiskManager.deleteAllVmDisks(connection);
        } catch (error) {
            logDeleteError("Virtual Machine", error);
        }
    } else {
        log("Virtual machine with name '" + vmName + "' does not exist in the resource group with name '" + resourceGroupName + "'. Skipping from cleanUp process.");
    }
}

if (nicNames && nicNames.length > 0) {
    for (var nicName of nicNames) {
        log("Cleaning up Network Interface Card with name '" + nicName + "'.");
        try {
            connection.networkClient.networkInterfacesOperations.delete(resourceGroupName, nicName);
            log("Network Interface Card with name '" + nicName + "' was successfully deleted.");
        } catch (error) {
            logDeleteError("Network Interface Card", error);
        }
    }
}

if (availabilitySetName) {
    log("Cleaning up Availability Set with name '" + availabilitySetName + "'.");
    try {
        var avSetUsage = azureModule.updateAvailabilitySetReferenceCountTag(connection, resourceGroupName, availabilitySetName, -1);
        if (avSetUsage == 0) {
            var avSetOperations = connection.computeClient.availabilitySetsOperations;
            log("AvailabilitySet with name '" + availabilitySetName + "' is no more used so will be deleted from subscription.");
            avSetOperations.delete(resourceGroupName, availabilitySetName);
            log("AvailabilitySet with name '" + availabilitySetName + "' was successfully deleted from subscription.");
        }
    } catch (error) {
        logDeleteError("Availability Set", error);
    }
}

if (resourceGroupName) {
    log("Cleaning up Resource Group with name '" + resourceGroupName + "'.");
    try {
        var remainedVMs = azureModule.updateResourceGroupReferenceCountTag(connection, resourceGroupName, -1, apiVersion);
        if (remainedVMs == 0) {
            // If none vRA specific tags are left, this means that the resource group is no more used and can be deleted from Azure Subscription.
            var resGroupOperations = connection.resourceClient.resourceGroupsOperations;
            resGroupOperations.delete(resourceGroupName);
            log("ResourceGroup with name '" + resourceGroupName + "' is no more used, thus was deleted from the subscription.");
        }
    } catch (error) {
        logDeleteError("Resource Group", error);
    }
}

function log(message) {
    System.log("[cleanUpAzureResources] " + message);
}

function logDeleteError(resourceType, error) {
    log("Could not delete " + resourceType + " because of the error: " + error);
}

function getStorageAccountDiskManager() {

    function DiskInfo(uri) {
        log("Parsing disk information for disk with URI: " + uri);
        // The dirk URI has a form like this:
        // https://<storage account name>.blob.core.windows.net/<container name>/<vhd filename>.vhd
        var parsed = uri.split("/");
        this.storageAccountName = parsed[2].substring(0, parsed[2].indexOf(storageBlobSuffix));
        this.containerName = parsed[3];
        this.vhdFileName = parsed[4];
        log("Parsed disk information contains: StorageAccountName = " + this.storageAccountName + ", ContainerName = " + this.containerName + ", vhd = " + this.vhdFileName);
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
            var storageAccounts = azureModule.findStorageAccounts(connection, this.storageAccountNamesToDiskInfoMap.keys);

            for (var storageAccount of storageAccounts) {
                var diskInfos = this.storageAccountNamesToDiskInfoMap.get(storageAccount.name);
                for (var diskInfo of diskInfos) {
                    log("Deleting VM disk with vhd '" + diskInfo.vhdFileName + "' from StorageAccount '" + storageAccount.name + "'.");
                    try {
                        storageAccount.deleteBlob(diskInfo.containerName, diskInfo.vhdFileName);
                        log("Deleted successfully.");
                    } catch (errorVhd) {
                        System.error("[cleanUpAzureResources] Could not delete virtual disk '" + diskInfo.vhdFileName + "' that resides in container '" + diskInfo.containerName
                                + "' part of storage account with name '" + diskInfo.storageAccountName +"'. The server returned error: ");
                        System.error(errorVhd);
                        System.warn("[cleanUpAzureResources] You will have to remove this vhd file manually through Azure portal.");
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
            log("Added vhd file '" + diskInfo.vhdFileName + "' for a removal after the VM is deleted.");
        }
    };

    return storageAccountDiskManager;
}
}
}
