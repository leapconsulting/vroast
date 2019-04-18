/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function createVirtualNetworkCard(id?: string, name?: string, description?: string, addressOnParent?: string, ipAddress?: string, ipAddressingMode?: vCloud.IpAddressAllocationModeType, vappNetworkName?: string, primaryNic?: boolean): void {// create a RASD instance describing the NIC
var rasd = new VclRASD();

var elementName = new VclCimString();
elementName.value = name;
rasd.elementName = elementName;

var elementDescription = new VclCimString();
elementDescription.value = description;
rasd.description = elementDescription;

var instanceId = new VclCimString();
instanceId.value = id;
rasd.instanceID = instanceId;

var resourceType = new VclResource();
resourceType.value = "10";
rasd.resourceType = resourceType;

var resourceSubType = new VclCimString();
resourceSubType.value = "PCNet32";
rasd.resourceSubType = resourceSubType;

var automaticAllocation = new VclCimBoolean();
automaticAllocation.value = true;
rasd.automaticAllocation = automaticAllocation;

var elementAddressOnParent = new VclCimString();
elementAddressOnParent.value = addressOnParent;
rasd.addressOnParent = elementAddressOnParent;

var connection = new VclCimString();
connection.value = vappNetworkName;
connection.otherAttributes.put(VclMiscObjectFactory.createQName("primaryNetworkConnection", "http://www.vmware.com/vcloud/v1.5", ""), primaryNic + '');
connection.otherAttributes.put(VclMiscObjectFactory.createQName("ipAddressingMode", "http://www.vmware.com/vcloud/v1.5", ""), ipAddressingMode.value);
if (ipAddress != null) {
	connection.otherAttributes.put(VclMiscObjectFactory.createQName("ipAddress", "http://www.vmware.com/vcloud/v1.5", ""), ipAddress);
}
rasd.connection.add(connection);
 
return new VclVirtualNetworkCard(rasd);
}
}
