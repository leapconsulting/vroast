/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function updateDisksVM(targetEntityArg?: vCloud.VM, virtualDisksArg?: Array<any>): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateDisks(virtualDisksArg);
}
}
