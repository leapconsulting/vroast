/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function addVAppTemplateVM(vApp?: vCloud.VApp, vmTemplate?: vCloud.VAppTemplate, vmName?: string): vCloud.Task {if (!vmTemplate.isVm) throw "Error: The VAppTemplate you selected is not a VM!";

var recomposeVAppParams = new VclRecomposeVAppParams();
var vmItem = new VclSourcedCompositionItemParam();
if (vmName != null) vmTemplate.name = vmName;
vmItem.source = vmTemplate.getReference();
vmItem.sourceDelete = false;
vmItem.instantiationParams = new VclInstantiationParams();

var numNetConnections = vmTemplate.getNetworkConnectionSection().networkConnection.size();

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
