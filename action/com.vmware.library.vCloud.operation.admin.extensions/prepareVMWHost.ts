/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function prepareVMWHost(targetEntityArg?: vCloud.VmwHost, usernameArg?: string, passwordArg?: string): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.prepare(usernameArg,passwordArg);
}
}
