/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function getUserByNameAdminOrg(targetEntityArg?: vCloud.AdminOrganization, nameArg?: string): vCloud.User {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getUserByName(nameArg);
}
}
