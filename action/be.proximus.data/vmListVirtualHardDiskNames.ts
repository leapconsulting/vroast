/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function vmListVirtualHardDiskNames(vm?: vCloud.VM): Array<string> {var disks = vm.getDisks();
var names = new Array();
for (var i = 0; i < disks.length; i++) {
	if (disks[i].isHardDisk()) {
		names.push(disks[i].itemResource.elementName.value);
//		names.push(disks[i].name);
	}
}
return names;
}
}
