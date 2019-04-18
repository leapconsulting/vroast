/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function reconfigureVM(targetEntityArg?: vCloud.VM, paramsArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.reconfigure(paramsArg);
}
}
