/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateServer(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, serverName?: string, adminLogin?: string, adminLoginPassword?: string): Azure.Server {if (!connection) {
	throw "Connection cannot be null.";
}

if (!location) {
	throw "Location cannot be null.";
}

if (!resourceGroup) {
	throw "Resource group cannot be null.";
}

var parameters = new AzureServerCreateOrUpdateParameters();
parameters.location = location.name;
var properties = new AzureServerCreateOrUpdateProperties();
properties.administratorLogin = adminLogin;
properties.administratorLoginPassword = adminLoginPassword;
parameters.properties = properties;

connection.databaseClient.serversOperations.createOrUpdate(resourceGroup.name, serverName, parameters);

return resourceGroup.getDatabaseServer(serverName);
}
}
