/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateNetworkSecurityGroup(connection?: Azure.Connection, location?: Azure.Location, resourceGroup?: Azure.ResourceGroupExtended, networkSecurityGroupName?: string): Azure.NetworkSecurityGroup {if (!connection) {
	throw new "Connection cannot be null.";
}
if(!location) {
	throw new "Location cannot be null.";
}
if (!resourceGroup) {
	throw new "Resource group cannot be null.";
}
if (!networkSecurityGroupName) {
	throw new "Network security group name cannot be null.";
}

var securityGroup = new AzureNetworkSecurityGroup(location.name);

connection.networkClient.networkSecurityGroupsOperations.createOrUpdate(resourceGroup.name, networkSecurityGroupName, securityGroup);

return resourceGroup.getNetworkSecurityGroupByGroupName(networkSecurityGroupName);
}
}
