/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function suspendVM(targetEntityArg?: vCloud.VM): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.suspend();
}
}
