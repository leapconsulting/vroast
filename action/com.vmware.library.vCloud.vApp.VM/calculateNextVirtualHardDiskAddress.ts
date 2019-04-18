/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function calculateNextVirtualHardDiskAddress(vm?: vCloud.VM, controllerId?: string, isIdeController?: boolean): string {var availableAddresses = null;
if (isIdeController) {
	availableAddresses = new Array('0','1');
} else {
	availableAddresses = new Array('0','1','2','3','4','5','6','8','9','10','11','12','13','14','15');
}	
var disks = vm.getDisks();
for (var i = 0; i < disks.length; i++) {
	if (disks[i].isHardDisk() && disks[i].itemResource.parent.value == controllerId) {
		var address = disks[i].itemResource.addressOnParent.value;
		for (var j = 0; j < availableAddresses.length; j++) {
			if (availableAddresses[j] == address) {
				availableAddresses.splice(j, 1);
				break;
			}
		}		
	}
}
if (availableAddresses.length == 0) {
	throw "All slots on controller" + controllerId + " are in use";
}
return availableAddresses[0];
}
}
