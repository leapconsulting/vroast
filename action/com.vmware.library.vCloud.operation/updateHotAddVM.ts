/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateHotAddVM(targetEntityArg?: vCloud.VM, memoryHotAddArg?: boolean, cpuHotAddArg?: boolean): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateHotAdd(memoryHotAddArg,cpuHotAddArg);
}
}
