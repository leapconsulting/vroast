/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function getGroupsAdminOrg(targetEntityArg?: vCloud.AdminOrganization): Array<vCloud.Group> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getGroups();
}
}
