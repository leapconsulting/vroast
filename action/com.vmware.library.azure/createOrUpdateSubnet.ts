/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateSubnet(connection?: Azure.Connection, resourceGroup?: Azure.ResourceGroupExtended, virtualNetwork?: Azure.VirtualNetwork, subnetName?: string, addressPrefix?: string): Azure.Subnet {if (!connection) {
	throw new "Connection cannot be null.";
}
if (!resourceGroup) {
	throw new "Resource group cannot be null.";
}

if (!virtualNetwork) {
	throw new "Virtual network cannot be null.";
}

if (!subnetName) {
	throw new "Subnet name cannot be null.";
}
if (!addressPrefix) {
	throw new "Address prefix cannot be null.";
}

var subnet = new AzureSubnet();
subnet.addressPrefix = addressPrefix;

connection.networkClient.subnetsOperations.createOrUpdate(resourceGroup.name, virtualNetwork.name, subnetName, subnet);

return virtualNetwork.getSubnet(subnetName);
}
}
