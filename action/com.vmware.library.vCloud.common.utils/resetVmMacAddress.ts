/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function resetVmMacAddress(vm?: vCloud.VM): vCloud.Task {vm.updateInternalState();
var networkConnectionSection = vm.getNetworkConnectionSection();
var networkConnections = networkConnectionSection.networkConnection.enumerate();

if (networkConnections.length == 0) {
	throw "No network connection for this VM";
}
networkConnections[0].mACAddress = null;
networkConnectionSection.networkConnection.remove(0);
networkConnectionSection.networkConnection.add(networkConnections[0]);
return vm.updateSection(networkConnectionSection);

}
}
