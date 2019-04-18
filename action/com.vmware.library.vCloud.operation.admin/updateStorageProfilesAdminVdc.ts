/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function updateStorageProfilesAdminVdc(targetEntityArg?: vCloud.AdminVdc, classesToAddArg?: Array<any>, classesToRemoveArg?: Array<any>): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateStorageProfiles(classesToAddArg,classesToRemoveArg);
}
}
