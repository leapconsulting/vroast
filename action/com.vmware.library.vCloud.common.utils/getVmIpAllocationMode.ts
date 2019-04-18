/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function getVmIpAllocationMode(vm?: vCloud.VM): string {vm.updateInternalState();
var networkConnectionSection = vm.getNetworkConnectionSection();
return networkConnectionSection.networkConnection.enumerate()[0].ipAddressAllocationMode;

}
}
