/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function vmListIndependentDiskNames(vm?: VC.VirtualMachine): Array<string> {// Find and Map disks names & Sizes to local variable
var names = new Array();
var devices=vm.config.hardware.device;
for (var device of devices) {
	if (device instanceof VcVirtualDisk){
		names.push(device.deviceInfo.label);
	}
}

return names;


}
}
