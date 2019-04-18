/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function checkAuthorizationVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, paramsArg?: any): boolean {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.checkAuthorization(paramsArg);
}
}
