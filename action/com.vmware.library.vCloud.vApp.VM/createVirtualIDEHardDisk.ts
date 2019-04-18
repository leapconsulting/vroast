/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function createVirtualIDEHardDisk(id?: string, name?: string, description?: string, size?: number, controllerId?: string, addressOnController?: string): any {// create a RASD instance describing the HDD
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

var elementParent = new VclCimString();
elementParent.value = controllerId;
rasd.parent = elementParent;

var elementAddressOnParent = new VclCimString();
elementAddressOnParent.value = addressOnController;
rasd.addressOnParent = elementAddressOnParent;

// provide HDD capacity and bus type
var elementHostResource = new VclCimString();
elementHostResource.otherAttributes.put(VclMiscObjectFactory.createQName("capacity", "http://www.vmware.com/vcloud/v1.5", ""), size + '');
elementHostResource.otherAttributes.put(VclMiscObjectFactory.createQName("busType", "http://www.vmware.com/vcloud/v1.5", ""), "5");
rasd.hostResource.add(elementHostResource);

return new VclVirtualDisk(rasd);
}
}
