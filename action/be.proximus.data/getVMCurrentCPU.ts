/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getVMCurrentCPU(vm?: vCloud.VM): any {var cpu = com.vmware.library.vCloud.operation.getCpuVM(vm);

var currentCPU = cpu.getNoOfCpus() ;
System.log("VM current CPU is : "+ currentCPU);

return currentCPU;
}
}
