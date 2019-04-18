/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateRouteTable(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, routeTableName?: string): Azure.RouteTable {if (!connection) {
	throw new "Connection cannot be null.";
}
if (!location) {
	throw new "Location cannot be null.";
}
if (!resourceGroup) {
	throw new "Resource group cannot be null.";
}

if (!routeTableName) {
	throw new "Route table name cannot be null.";
}

var routeTable = new AzureRouteTable(location.name);

connection.networkClient.routeTablesOperations.createOrUpdate(resourceGroup.name, routeTableName, routeTable);

return resourceGroup.getRouteTable(routeTableName);
}
}
