/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getVCVMByName(vmName?: string): VC.VirtualMachine {System.log("Map VM name to VM Object to next steps... ");
vms = new Array();
System.log("vmName =" + vmName);
var found = VcPlugin.getAllVirtualMachines(null, vmName);
for (var vm in found){
        vms.push(found[vm]);
    }
System.log("VM Object converted to: " + vms[0]);
return vms[0];



}
}
