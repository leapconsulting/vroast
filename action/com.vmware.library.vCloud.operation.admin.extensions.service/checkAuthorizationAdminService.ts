/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions.service {
export function checkAuthorizationAdminService(targetEntityArg?: vCloud.AdminService, paramsArg?: any): boolean {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.checkAuthorization(paramsArg);
}
}
