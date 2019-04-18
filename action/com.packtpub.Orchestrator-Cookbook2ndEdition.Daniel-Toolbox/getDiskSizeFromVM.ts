/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition.Daniel-Toolbox {
export function getDiskSizeFromVM(myVM?: VC.VirtualMachine): Array<number> {var disksize = new Array();
devices=myVM.config.hardware.device;
for (var device of devices) {
	if (device instanceof VcVirtualDisk){
		disksize.push(device.capacityInKB/1024/1024);
	}
}
return disksize;
}
}
