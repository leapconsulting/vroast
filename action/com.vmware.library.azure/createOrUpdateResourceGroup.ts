/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.azure {
export function createOrUpdateResourceGroup(connection?: Azure.Connection, location?: Azure.Location, groupName?: string): Azure.ResourceGroupExtended {var resourceManagementClient = connection.resourceClient;

var resourceGroup = new AzureResourceGroup(location.name);

resourceManagementClient.resourceGroupsOperations.createOrUpdate(groupName, resourceGroup);

return connection.getResourceGroupByName(groupName);
}
}
