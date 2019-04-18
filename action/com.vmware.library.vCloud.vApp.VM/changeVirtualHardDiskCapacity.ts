/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function changeVirtualHardDiskCapacity(virtualDisk?: any, newSize?: number): any {if (virtualDisk == null) {
	throw "Virtual Disk is not specified";
}
if (!virtualDisk.isHardDisk()) {		
	throw "Not a disk";
}
var hostResource = virtualDisk.itemResource.hostResource;
var resources = hostResource.enumerate();
if (resources.length > 0) {
	var cimString = resources[0];
	var qname = VclMiscObjectFactory.createQName("capacity", "http://www.vmware.com/vcloud/v1.5", "");
	cimString.otherAttributes.put(qname, newSize + '');
} else {
	throw "Capacity resource not found";
}
return virtualDisk;
}
}
