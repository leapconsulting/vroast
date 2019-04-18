/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getParentVMFolder(vm?: VC.VirtualMachine): VC.VmFolder {// VMware vRealize Orchestrator action sample
//
// Returns the VM folder of a given vCenter VM
// 
// For vRO 7.0+/vCenter 6.0+
//
// Action Inputs:
// vm - VC:VirtualMachine - vCenter VM
//
// Return type: VC:VmFolder - the folder to which the VM belongs

var parent = vm.parent;
while (parent !== null && ! (parent instanceof VcVmFolder)) {
	parent = parent.parent;
}
System.log("VcVmFolder of VM: " + parent.name);

return parent;
}
}
