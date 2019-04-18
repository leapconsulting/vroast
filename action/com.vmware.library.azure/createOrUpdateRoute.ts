/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateRoute(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, routeTable?: Azure.RouteTable, routeName?: string, addressPrefix?: string, nextHopType?: string): Azure.Route {if (!connection) {
	throw new "Connection cannot be null.";
}

if (!resourceGroup) {
	throw new "Resource group cannot be null.";
}

if (!routeTable) {
	throw new "Route table cannot be null.";
}

if (!routeName) {
	throw new "Route name cannot be null.";
}

if (!addressPrefix) {
	throw new "Address prefix cannot be null.";
}

if (!nextHopType) {
	throw new "Next hop type cannot be null.";
}


var route = new AzureRoute();
route.addressPrefix = addressPrefix;
route.nextHopType = nextHopType; //default is "VirtualNetworkGateway";

connection.networkClient.routesOperations.createOrUpdate(resourceGroup.name, routeTable.name, routeName, route);

return routeTable.getRoute(routeName);
}
}
