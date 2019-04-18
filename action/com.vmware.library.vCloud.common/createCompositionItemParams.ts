/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createCompositionItemParams(vm?: vCloud.VM, vmFullName?: string, vmComputerName?: string, vmNic1Network?: vCloud.OrgNetwork, vmNic1IPAssignment?: vCloud.IpAddressAllocationModeType, vmNic1IPAddress?: string, vmNic2Network?: vCloud.OrgNetwork, vmNic2IPAssignment?: vCloud.IpAddressAllocationModeType, vmNic2IPAddress?: string, vmNic3Network?: vCloud.OrgNetwork, vmNic3IPAssignment?: vCloud.IpAddressAllocationModeType, vmNic3IPAddress?: string, vmPrimaryNic?: number): Array<any> {// var vm = new VclVM() ;

vm.name = vmFullName;

var instantiationParams = new VclInstantiationParams();

//var guestCustomizationSection = new VclGuestCustomizationSection();
//guestCustomizationSection.computerName = vmComputerName;
//guestCustomizationSection.info = com.vmware.library.vCloud.common.createOvfMsg(null,"GuestCustomizationSection");

//instantiationParams.guestCustomizationSection = guestCustomizationSection;

if (vmPrimaryNic > 0) {

	var networkConnectionSection = new VclNetworkConnectionSection();
	networkConnectionSection.primaryNetworkConnectionIndex = vmPrimaryNic - 1;
	networkConnectionSection.info = com.vmware.library.vCloud.common.createOvfMsg(null,"NetworkConnectionSection");

	// TODO expose ObjectList length	
	var nics = vm.getNetworkConnectionSection().networkConnection.size();
	if (nics > 3) {
		nics = 3;
	}
	
	if (nics > 0) {
		var netCon = new VclNetworkConnection();
		netCon.networkConnectionIndex = 0;
		netCon.network = "none";
		netCon.ipAddressAllocationMode = VclIpAddressAllocationModeType.NONE;
		netCon.isConnected = false;
		if (vmNic1Network != null) {
			netCon.network = vmNic1Network.name;
			netCon.ipAddressAllocationMode = vmNic1IPAssignment;
			if ("" != vmNic1IPAddress) netCon.ipAddress = vmNic1IPAddress;
			netCon.isConnected = true;
		}
		
		networkConnectionSection.networkConnection.add(netCon);
	}
	
	if (nics > 1) {
		var netCon = new VclNetworkConnection();
		netCon.networkConnectionIndex = 1;
		netCon.network = "none";
		netCon.ipAddressAllocationMode = VclIpAddressAllocationModeType.NONE;
		netCon.isConnected = false;
		if (vmNic2Network != null) {
			netCon.network = vmNic2Network.name;
			netCon.ipAddressAllocationMode = vmNic2IPAssignment;
			if ("" != vmNic2IPAddress) netCon.ipAddress = vmNic2IPAddress;
			netCon.isConnected = true;
		}
		networkConnectionSection.networkConnection.add(netCon);
	}
	
	if (nics > 2) {
		var netCon = new VclNetworkConnection();
		netCon.networkConnectionIndex = 2;
		netCon.network = "none";
		netCon.ipAddressAllocationMode = VclIpAddressAllocationModeType.NONE;
		netCon.isConnected = false;
		if (vmNic3Network != null) {
			netCon.network = vmNic3Network.name;
			netCon.ipAddressAllocationMode = vmNic3IPAssignment;
			if ("" != vmNic3IPAddress) netCon.ipAddress = vmNic3IPAddress;
			netCon.isConnected = true;
		}
		networkConnectionSection.networkConnection.add(netCon);
	}
	
	instantiationParams.section.add(networkConnectionSection);
}

var item = new VclSourcedCompositionItemParam();
item.source = vm.getReference();
item.instantiationParams = instantiationParams;

return item;

}
}
