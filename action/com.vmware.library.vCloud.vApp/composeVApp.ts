/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function composeVApp(vdc?: vCloud.Vdc, vAppName?: string, vAppDescription?: string, runtimeLeaseDays?: number, storageLeaseDays?: number, vms?: Array<vCloud.VM>, vmNames?: Array<string>, vmTemplates?: Array<vCloud.VAppTemplate>, vmTemplateNames?: Array<string>): vCloud.VApp {var composeVAppParams = new VclComposeVAppParams();
var instantiationParams = new VclInstantiationParams()

composeVAppParams.name = vAppName;
composeVAppParams.description = vAppDescription;
composeVAppParams.deploy = false;
composeVAppParams.powerOn = false;
composeVAppParams.allEULAsAccepted = true;

var leaseSettingsSection = 
	com.vmware.library.vCloud.common.createLeaseSettingsSection("days",runtimeLeaseDays,"days",storageLeaseDays);
instantiationParams.section.add(leaseSettingsSection);

var networkConfigSection = new VclNetworkConfigSection();
networkConfigSection.info = com.vmware.library.vCloud.common.createOvfMsg(null,"NetworkConfigSection");
networkConfigSection.networkConfig.add(
	com.vmware.library.vCloud.common.createVAppNetworkConfigurationNone());
instantiationParams.section.add(networkConfigSection);

var vmItem; 
var index;
// Add VMs
if (vms != null) {
	for (var index = 0; index < vms.length; index++) {
		var vm = vms[index];
		
		if (vmNames != null) {
			if (vmNames[index] != null && vmNames[index] != "") {
				vm.name = vmNames[index];
			}
		}
		vmItem = new VclSourcedCompositionItemParam();
		vmItem.source = vm.getReference();
		vmItem.instantiationParams = new VclInstantiationParams();
	
		var vmNetworkConnectionSection = vm.getNetworkConnectionSection();
		if (vmNetworkConnectionSection != null) {
			var numNetConnections = vmNetworkConnectionSection.networkConnection.size();		
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
		composeVAppParams.sourcedItem.add(vmItem);
	}
}
// Add VM templates
if (vmTemplates != null) {
	for (var index = 0; index < vmTemplates.length; index++) {
		var vmTemplate = vmTemplates[index];		
		if (!vmTemplate.isVm) throw "VAppTemplate '" + vmTemplate.name + "' is not a VM!";
		
		if (vmTemplateNames != null) {
			if (vmTemplateNames[index] != null && vmTemplateNames[index] != "") {
				vmTemplate.name = vmTemplateNames[index];
			}
		}
		vmItem = new VclSourcedCompositionItemParam();
		vmItem.source = vmTemplate.getReference();
		vmItem.instantiationParams = new VclInstantiationParams();
	
		var vmTemplateNetworkConnectionSection = vmTemplate.getNetworkConnectionSection();		
		if (vmTemplateNetworkConnectionSection != null) {
			var numNetConnections = vmTemplateNetworkConnectionSection.networkConnection.size();
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
		composeVAppParams.sourcedItem.add(vmItem);
	}
}

composeVAppParams.instantiationParams = instantiationParams;
return vdc.composeVApp(composeVAppParams);

}
}
