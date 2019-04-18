/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function calculateNextNetworkCardAddress(vm?: vCloud.VM): string {var availableAddresses = new Array('0','1','2','3');	
var nics = vm.getNetworkCards();
for (var i = 0; i < nics.length; i++) {
	var address = nics[i].itemResource.addressOnParent.value;
	for (var j = 0; j < availableAddresses.length; j++) {
		if (availableAddresses[j] == address) {
			availableAddresses.splice(j, 1);
			break;
		}				
	}
}
if (availableAddresses.length == 0) {
	throw "All possible network card addresses are in use";
}
return availableAddresses[0];
}
}
