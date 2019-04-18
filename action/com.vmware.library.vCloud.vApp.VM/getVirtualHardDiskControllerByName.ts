/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function getVirtualHardDiskControllerByName(vm?: vCloud.VM, controller?: string): any {var disks = vm.getDisks();
for (var i = 0; i < disks.length; i++) {
	if (!disks[i].isHardDisk() && disks[i].itemResource.elementName.value == controller) {
		return disks[i];
	}
}
return null;
}
}
