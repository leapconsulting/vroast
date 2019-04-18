/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function setVmIpAllocationMode(vm?: vCloud.VM, ipAddressAllocationMode?: string): vCloud.Task {vm.updateInternalState();
var networkConnectionSection = vm.getNetworkConnectionSection();
var firstNetworkConnection = networkConnectionSection.networkConnection.enumerate()[0];
firstNetworkConnection.ipAddressAllocationMode = ipAddressAllocationMode;
return vm.updateSection(networkConnectionSection);
}
}
