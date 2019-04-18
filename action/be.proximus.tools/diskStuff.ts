/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.tools {
export function diskStuff(vm?: VC.VirtualMachine): Array<string> {/*var devices = vm.config.hardware.device;
var disks = new Array();

for (var i in devices){
    if (devices[i].DeviceInfo.Label.indexOf('Hard disk') >= 0){
        if (devices[i].DeviceInfo.Label != "Hard disk 1"){
            var capacityGB = devices[i].capacityInKB / 1024 / 1024;
            var description = devices[i].deviceInfo.label + "-" + capacityGB + " GB";
            disks.push(description);
        }
    } 
}
return disks;

*/

// Find and Map disks names & Sizes to local variable
var names = new Array();
//var disksize = new Array();
var devices=vm.config.hardware.device;
for (var device of devices) {
	if (device instanceof VcVirtualDisk){
		names.push(device.deviceInfo.label);
//		disksize.push(device.capacityInKB/1024/1024);
		var disk = device;
	}
}
return names;
}
}
