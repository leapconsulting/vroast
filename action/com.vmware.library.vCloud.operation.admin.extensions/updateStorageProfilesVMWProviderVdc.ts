/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function updateStorageProfilesVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, classesToAddArg?: String[], classesToRemoveArg?: Array<any>): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateStorageProfiles(classesToAddArg,classesToRemoveArg);
}
}
