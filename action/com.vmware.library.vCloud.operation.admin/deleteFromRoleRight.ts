/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function deleteFromRoleRight(targetEntityArg?: vCloud.Right, vCloudRoleIdArg?: string): vCloud.Role {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.deleteFromRole(vCloudRoleIdArg);
}
}
