/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateAvailabilitySet(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, asName?: string): Azure.AvailabilitySet {if (!connection)
	throw "Connection cannot be null.";
if (!location)
	throw "Location cannot be null.";
if (!resourceGroup)
	throw "Resource group cannot be null.";

var as = new AzureAvailabilitySet(location.name);
as.name = asName;

connection.computeClient.availabilitySetsOperations.createOrUpdate(resourceGroup.name, as);

return resourceGroup.getAvailabilitySetByName(asName);
}
}
