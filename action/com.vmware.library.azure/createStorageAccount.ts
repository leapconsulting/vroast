/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createStorageAccount(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, location?: Azure.Location, storageAccountName?: string): Azure.StorageAccount {if (!connection) {
	throw "Connection cannot be null.";
}

if (!resourceGroup) {
	throw "Resource group cannot be null.";
}

if (!location) {
	throw "Location cannot be null.";
}

var parameters = new AzureStorageAccountCreateParameters(AzureAccountType.StandardGRS, location.name);
connection.storageClient.storageAccountsOperations.create(resourceGroup.name, storageAccountName, parameters);

var retries = 30;
//Wait for the storage client to be created
while (true) {
	System.sleep(3000);
	retries--;
	var storageAccount = resourceGroup.getStorageAccountByName(storageAccountName);
	if (storageAccount) {
		return storageAccount;
	}
	if (retries <= 0) {
		throw "Failed to create storage account '" + storageAccountName + "'";
	}
}
}
}
