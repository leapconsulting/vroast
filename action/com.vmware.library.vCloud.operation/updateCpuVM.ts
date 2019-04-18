/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateCpuVM(targetEntityArg?: vCloud.VM, virtualCpuArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateCpu(virtualCpuArg);
}
}
