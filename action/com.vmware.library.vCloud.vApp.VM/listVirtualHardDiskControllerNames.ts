/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function listVirtualHardDiskControllerNames(vm?: vCloud.VM): Array<string> {var disks = vm.getDisks();
var controllers = new Array();
controllers.push("Auto Select");
for (var i = 0; i < disks.length; i++) {
	if (!disks[i].isHardDisk()) {
		controllers.push(disks[i].itemResource.elementName.value);
	}
}
return controllers;
}
}
