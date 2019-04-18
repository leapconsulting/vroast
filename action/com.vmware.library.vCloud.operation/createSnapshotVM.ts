/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function createSnapshotVM(targetEntityArg?: vCloud.VM, arg0?: string, arg1?: string, arg2?: boolean, arg3?: boolean): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.createSnapshot(arg0,arg1,arg2,arg3);
}
}
