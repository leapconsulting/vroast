/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function deleteVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.erase();
}
}
