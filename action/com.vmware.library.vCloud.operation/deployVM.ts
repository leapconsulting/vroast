/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function deployVM(targetEntityArg?: vCloud.VM, powerOnArg?: boolean, leaseArg?: number, forceCustomizationArg?: boolean): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.deploy(powerOnArg,leaseArg,forceCustomizationArg);
}
}
