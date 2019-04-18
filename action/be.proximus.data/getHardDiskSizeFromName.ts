/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getHardDiskSizeFromName(vm?: vCloud.VM, diskName?: string): string {var modules = be.proximus.data;

//var vdcVM = modules.getVCVMByName(vm);
if(!vm || !diskName){
	return "Empty";
}else{
	var VCvm = VcPlugin.getAllVirtualMachines(null, vm.name);
	var listSize = new Array();
	var devices = VCvm[0].config.hardware.device;
	for (var device of devices) {
		if (device instanceof VcVirtualDisk){
			listSize.push(device.capacityInKB/1024/1024);
		}
	}
	
	var listDiskName = vm.getDisks();
	var names = new Array();
	for (var i = 0; i < listDiskName.length; i++) {
		if (listDiskName[i].isHardDisk()) {
			names.push(listDiskName[i].itemResource.elementName.value);
		}
	}
	
	for (var i = 0; i < names.length; i++) {
		if (names[i] == diskName) {
			return listSize[i].toString();
		}
	}	
}

}
}
