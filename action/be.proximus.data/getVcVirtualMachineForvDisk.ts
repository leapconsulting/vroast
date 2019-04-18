/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getVcVirtualMachineForvDisk(disk?: string, vCloudVDC?: vCloud.Vdc): VC.VirtualMachine {// WARNING: Auto generated code. Please, do not edit this code.
var allDisks =  vCloudVDC.getDisks();

var foundDisk = allDisks.filter(function(vdisk) {
	return disk == vdisk.name;
})[0];

var diskId = foundDisk.id.replace("urn:vcloud:disk:", "");
System.log(diskId);
var vms = VcPlugin.getAllVirtualMachines(null, diskId);
var vmForvVdisk;

if (vms.length == 1) {
	return vmForvVdisk = vms[0]
} else {
	throw "Cannot find vDisk!";
}
}
}
