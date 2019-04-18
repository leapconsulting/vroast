/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function connectVmToNetwork(vm?: VC.VirtualMachine, network?: VC.Network, startConnected?: boolean, connected?: boolean): VC.Task {//connection settings
var connectInfo = new VcVirtualDeviceConnectInfo();
connectInfo.allowGuestControl = false;
connectInfo.connected = connected;
connectInfo.startConnected = startConnected;
//check if this is a distributed switch?
if (network.id.indexOf("dvport")>=0){
	//backing for distributed switch
	var netBackingInfo = new VcVirtualEthernetCardDistributedVirtualPortBackingInfo(); 
	var port = new VcDistributedVirtualSwitchPortConnection();
	var dvSwitch = VcPlugin.convertToVimManagedObject(network, network.config.distributedVirtualSwitch);
	port.switchUuid = dvSwitch.uuid;
	port.portgroupKey = network.key;
	netBackingInfo.port = port;
} else {
	//backing for vSwitch
	var netBackingInfo = new VcVirtualEthernetCardNetworkBackingInfo();
	netBackingInfo.deviceName = network.name;
}
//Devicespecs are arrays
var nicArray = new Array();
//constructor for VM configuratoin
var vmspec = new VcVirtualMachineConfigSpec();
//constructor for the device configuration
var devicespec = new VcVirtualDeviceConfigSpec();
//get existing configuration
var devices = vm.config.hardware.device;
//go thought all devices to find NIC
for (var i in devices){
// is it a NIC?
	if (com.vmware.library.vc.vm.network.isSupportedNic(devices[i])) {
		devicespec.device = devices[i];
		//edit the exiting configuration
		devicespec.operation = VcVirtualDeviceConfigSpecOperation.edit;
		//attach new backing
		devicespec.device.backing = netBackingInfo;
		//attach new connection setting
		devicespec.device.connectable = connectInfo;
		//make array
		nicArray.push(devicespec);
	}
}
//build config
vmspec.deviceChange = nicArray;
//enact change on VM
return vm.reconfigVM_Task(vmspec);
}
}
