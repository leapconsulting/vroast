/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.vra.endpoint.azure {
export function updateResourceGroupReferenceCountTag(connection?: Azure.Connection, resourceGroupName?: string, numberToApply?: number, apiVersion?: string): number {var REFERENCE_COUNT_TAG_KEY = "xaas.allocation.reference.count";

// Assert that a valid value is passed for the number to apply.
if (numberToApply == 0) {
    throw "The passed number for changing the reference count for resource group with name '" + resourceGroupName + "' is 0.";
}

var lockId = resourceGroupName + "@" + connection.name;

// Locking
LockingSystem.lockAndWait(lockId, workflow.id);
log("Locked for '" + lockId + "'");

var updatedReferenceCount = 0;
var resourceGroup;

try {
    resourceGroup = connection.getResourceGroupByName(resourceGroupName);
    if (!resourceGroup) {
        throw "ResourceGroup with name '" + resourceGroupName + "' does not exist in the subscription!";
    }

    if (resourceGroup.tags && resourceGroup.tags.get(REFERENCE_COUNT_TAG_KEY)) {
        var referenceCount = parseInt(resourceGroup.tags.get(REFERENCE_COUNT_TAG_KEY));
        updatedReferenceCount = referenceCount + numberToApply;
        log("Current reference count is " + referenceCount + ". After the update it will be " + updatedReferenceCount);
        if (updatedReferenceCount < 0) {
            // Assure that we don't set reference count to less than 0.
            log("Cannot decrease reference count to a number less than zero! No action is taken.");
            return 0;
        }

        var tagsObject = {};
        // Transfer all tags from the ResourceGroup.
        for (var tagName of resourceGroup.tags.keys) {
            tagsObject[tagName] = resourceGroup.tags.get(tagName);
        }
        // And in the end update the tag with the new reference count.
        tagsObject[REFERENCE_COUNT_TAG_KEY] = updatedReferenceCount;

        var payload = {"tags":tagsObject, "location":resourceGroup.location};
        var azureResponse = connection.genericClient.put("resourcegroups/" + resourceGroupName + "?api-version=" + apiVersion, payload);
        log("Reference count was updated successfully. The new count is " + updatedReferenceCount);

    } else {
        log("The resource group with name '" + resourceGroupName + "' is not created by vRA as it has no reference count tag. No action is taken.");
        updatedReferenceCount = -1;
    }
} catch (error) {
    throw "Cannot update reference count tag because of the error: " + error;
} finally {
    // Unlocking
    LockingSystem.unlock(lockId, workflow.id);
    log("Unlocked for '" + lockId + "'");
}

return updatedReferenceCount;

function log(message) {
    System.log("[updateResourceGroupReferenceCountTag] " + message);
}
}
}
