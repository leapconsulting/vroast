/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function changeCpuNumber(cpu?: any, cpuNumber?: number, cpuShares?: number): any {cpu.noOfCpus = cpuNumber;
var weight = new VclCimUnsignedInt();
weight.value = cpuShares;
cpu.itemResource.weight = weight; 
return cpu;
}
}
