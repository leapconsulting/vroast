/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions.service {
export function getRightsAdminService(targetEntityArg?: vCloud.AdminService): Array<vCloud.Right> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getRights();
}
}
