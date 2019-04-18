/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function changeIndependentDiskSize(diskString?: string, newSize?: number, vm?: VC.VirtualMachine): VC.Task {// Find correct disks names to local variable
var names = new Array();
var disksize = new Array();
var devices=vm.config.hardware.device;
for (var device of devices) {
	if (device instanceof VcVirtualDisk){
		names.push(device.deviceInfo.label);
		var diskName = device;
	}
}

// CONFIGURATION SPEC - Change Independent Disk Size
if (diskName == diskString){
	var spec = new VcVirtualMachineConfigSpec();
	spec.changeVersion = vm.config.changeVersion;
	System.log(spec.changeVersion);
	var deviceChanges = new Array();
	var deviceChange = new VcVirtualDeviceConfigSpec();
	deviceChange.operation = VcVirtualDeviceConfigSpecOperation.edit;
	deviceChange.device = diskName;
	deviceChange.device.capacityInKB = newSize;
	deviceChanges.push(deviceChange);
	spec.deviceChange = deviceChanges
	return vm.reconfigVM_Task(spec); 
}else{
	System.log("Disk not match");
	throw "Disk not match!";
}
}
}
