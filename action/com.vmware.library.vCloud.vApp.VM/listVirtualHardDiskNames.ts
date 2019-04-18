/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function listVirtualHardDiskNames(vm?: vCloud.VM): Array<string> {var disks = vm.getDisks();
var names = new Array();
for (var i = 0; i < disks.length; i++) {
	if (disks[i].isHardDisk()) {
		names.push(disks[i].itemResource.elementName.value);
	}
}
return names;
}
}
