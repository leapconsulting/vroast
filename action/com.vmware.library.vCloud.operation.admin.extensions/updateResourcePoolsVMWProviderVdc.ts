/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function updateResourcePoolsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, rpsToAddArg?: Array<any>, rpsToRemoveArg?: Array<any>): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateResourcePools(rpsToAddArg,rpsToRemoveArg);
}
}
