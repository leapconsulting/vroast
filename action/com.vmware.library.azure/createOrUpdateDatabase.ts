/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateDatabase(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, server?: Azure.Server, databaseName?: string): Azure.Database {if (!connection) {
	throw "Connection cannot be null.";
}

if (!location) {
	throw "Location cannot be null.";
}

if (!resourceGroup) {
	throw "Resource group cannot be null.";
}

var parameters = new AzureDatabaseCreateOrUpdateParameters();
parameters.location = location.name;
var properties = new AzureDatabaseCreateOrUpdateProperties();
parameters.properties = properties;

connection.databaseClient.databasesOperations.createOrUpdate(resourceGroup.name, server.name, databaseName, parameters);

var retries = 30;
//Wait for the database to be created
while (true) {
	var database = server.getDatabase(databaseName);
	if (database) {
	   return database;
	}
	retries--;
	if (retries <= 0) {
		throw "Failed to create database '" + databaseName + "'";
	}
	System.sleep(3000);
}
}
}
