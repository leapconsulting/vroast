/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function createAvailabilitySet(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, asName?: string): Azure.AvailabilitySet {var REFERENCE_COUNT_TAG_KEY = "xaas.allocation.reference.count";

if (!connection)
    throw "Connection cannot be null.";
if (!location)
    throw "Location cannot be null.";
if (!resourceGroup)
    throw "Resource group cannot be null.";

var lockId = asName + "@" + resourceGroup.name + "@" + connection.name;

// Locking
LockingSystem.lockAndWait(lockId, workflow.id);
log("Locked for '" + lockId + "'");

try {
    var as = resourceGroup.getAvailabilitySetByName(asName);
    if (as == null) {
        log("Creating new availability set with name: '" + asName + "' in resource group: '" + resourceGroup.displayName + "'.");
        as = new AzureAvailabilitySet(location.name);
        as.name = asName;
        var tags = new Properties();
        // This is the initial creation of the AvailabilitySet, so add reference count tag.
        tags.put(REFERENCE_COUNT_TAG_KEY, "0");
        as.tags = tags;
        connection.computeClient.availabilitySetsOperations.createOrUpdate(resourceGroup.name, as);
        log("Availability set created successfully.");
    } else {
        log("Found availability set with name: '" + asName + "' in resource group: '" + resourceGroup.displayName + "'.");
    }
} finally {
    // Unlocking
    LockingSystem.unlock(lockId, workflow.id);
    log("Unlocked for '" + lockId + "'");
}

return resourceGroup.getAvailabilitySetByName(asName);

function log(message) {
    System.log("[createAvailabilitySet] " + message);
}
}
}
