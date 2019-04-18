/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function deployVApp(targetEntityArg?: vCloud.VApp, powerOnArg?: boolean, leaseArg?: number, forceCustomizationArg?: boolean): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.deploy(powerOnArg,leaseArg,forceCustomizationArg);
}
}
