/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function wireVM(vm?: vCloud.VM, nicNumber?: number, vAppNetworkName?: string, ipAddressAllocationMode?: vCloud.IpAddressAllocationModeType, ipAddress?: string, isConnected?: boolean, macAddress?: string, needsCustomization?: boolean): vCloud.Task {var numNICs = com.vmware.library.vCloud.vApp.VM.getNumberOfNic(vm,999);
if (nicNumber >= numNICs) {
	throw "NIC# " + nicNumber + " does not exist!";
}
var networkConnections = vm.getNetworkConnectionSection().networkConnection.enumerate();
var newNetworkConnectionSection = new VclNetworkConnectionSection();
newNetworkConnectionSection.info = com.vmware.library.vCloud.common.createOvfMsg(null,"NetworkConnectionSection");
for (var networkConnection of networkConnections) {
	if (networkConnection.networkConnectionIndex == nicNumber) {
		networkConnection.network = vAppNetworkName;
		networkConnection.ipAddressAllocationMode = ipAddressAllocationMode.value;
		if (ipAddressAllocationMode.value == VclIpAddressAllocationModeType.MANUAL.value) {
			if (ipAddress == null) {
				throw "Network address is required in selected address allocation mode.";
			}
			var validateIPerror = com.vmware.library.vCloud.common.validateIp(ipAddress,true);
			if (validateIPerror != null) {
				throw validateIPerror;
			}
			networkConnection.ipAddress = ipAddress;
		}
		networkConnection.isConnected = isConnected;
		if (macAddress != null && macAddress != "") {
			networkConnection.mACAddress = macAddress;
		}
		networkConnection.needsCustomization = needsCustomization;
	}
	newNetworkConnectionSection.networkConnection.add(networkConnection);
}
return vm.updateSection(newNetworkConnectionSection);
}
}
