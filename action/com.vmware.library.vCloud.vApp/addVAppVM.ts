/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function addVAppVM(vApp?: vCloud.VApp, vm?: vCloud.VM, vmName?: string): vCloud.Task {var recomposeVAppParams = new VclRecomposeVAppParams();
var vmItem = new VclSourcedCompositionItemParam();
if (vmName != null) vm.name = vmName;
vmItem.source = vm.getReference();
vmItem.sourceDelete = false;
vmItem.instantiationParams = new VclInstantiationParams();

var numNetConnections = vm.getNetworkConnectionSection().networkConnection.size();

if (numNetConnections > 0) {
	var networkConnectionSection = new VclNetworkConnectionSection();
	networkConnectionSection.info = com.vmware.library.vCloud.common.createOvfMsg(null,"NetworkConnectionSection");
	for (var netIx = 0; netIx < numNetConnections; netIx++) {
		var netCon = new VclNetworkConnection();
		netCon.networkConnectionIndex = netIx;
		netCon.network = "none";
		netCon.ipAddressAllocationMode = VclIpAddressAllocationModeType.NONE;
		netCon.isConnected = false;
		networkConnectionSection.networkConnection.add(netCon);
	}
	vmItem.instantiationParams.section.add(networkConnectionSection);
}
recomposeVAppParams.sourcedItem.add(vmItem);
return vApp.recompose(recomposeVAppParams);
}
}
