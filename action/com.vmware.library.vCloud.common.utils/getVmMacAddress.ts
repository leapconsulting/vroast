/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function getVmMacAddress(vm?: vCloud.VM): string {vm.updateInternalState();
var networkConnectionSection = vm.getNetworkConnectionSection();
var networkConnections = networkConnectionSection.networkConnection.enumerate();

if (networkConnections.length == 0) {
	throw "No network connection for this VM";
}
return networkConnections[0].mACAddress; 
}
}
