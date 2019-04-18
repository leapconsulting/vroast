/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function migrateVmsVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, sourceRpMoRefArg?: string, vmRefsArg?: Array<any>, targetRpRefArg?: any): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.migrateVms(sourceRpMoRefArg,vmRefsArg,targetRpRefArg);
}
}
