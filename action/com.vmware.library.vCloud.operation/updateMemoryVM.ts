/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateMemoryVM(targetEntityArg?: vCloud.VM, virtualMemoryArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateMemory(virtualMemoryArg);
}
}
