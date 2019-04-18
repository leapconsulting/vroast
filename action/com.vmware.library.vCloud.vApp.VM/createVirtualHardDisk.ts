/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function createVirtualHardDisk(id?: string, name?: string, description?: string, size?: number): void {// create a RASD instance describing the HDD
var rasd = new VclRASD();

var elementName = new VclCimString();
elementName.value = name;
rasd.elementName = elementName;

var elementDescription = new VclCimString();
elementDescription.value = description;
rasd.description = elementDescription;

var resourceType = new VclResource();
resourceType.value = "17";
rasd.resourceType = resourceType;

var instanceId = new VclCimString();
instanceId.value = id;
rasd.instanceID = instanceId;

// provide HDD capacity and bus type
var elementHostResource = new VclCimString();
elementHostResource.otherAttributes.put(VclMiscObjectFactory.createQName("capacity", "http://www.vmware.com/vcloud/v1.5", ""), size + '');
rasd.hostResource.add(elementHostResource);

return new VclVirtualDisk(rasd);
}
}
