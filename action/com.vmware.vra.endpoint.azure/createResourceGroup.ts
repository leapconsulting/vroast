/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createResourceGroup(connection?: Azure.Connection, location?: Azure.Location, groupName?: string, apiVersion?: string): Azure.ResourceGroupExtended {var REFERENCE_COUNT_TAG_KEY = "xaas.allocation.reference.count";

var lockId = groupName + "@" + connection.name;

// Locking
LockingSystem.lockAndWait(lockId, workflow.id);
log("Locked for '" + lockId + "'");

try {
    var resourceGroup = connection.getResourceGroupByName(groupName);

    if (resourceGroup == null) {
        // Create
        log("Creating new resource group with name: '" + groupName + "' in connection: '" + connection.displayName + "'");
        var resourceManagementClient = connection.resourceClient;
        resourceGroup = new AzureResourceGroup(location.name);
        // This is the initial creation of the ResourceGroup, so add the reference count tag.
        var tags = new Properties();
        tags.put(REFERENCE_COUNT_TAG_KEY, "0");
        resourceGroup.tags = tags;
        resourceManagementClient.resourceGroupsOperations.createOrUpdate(groupName, resourceGroup);
        log("Resource group created successfully.");
    } else {
        // The resourceGroup exists, so don't do anything.
        log("Found Resource group with name: '" + groupName + "' in connection: '" + connection.displayName + "'.");
    }
} finally {
    // Unlocking
    LockingSystem.unlock(lockId, workflow.id);
    log("Unlocked for '" + lockId + "'");
}

return connection.getResourceGroupByName(groupName);

function log(message) {
    System.log("[createResourceGroup] " + message);
}
}
}
