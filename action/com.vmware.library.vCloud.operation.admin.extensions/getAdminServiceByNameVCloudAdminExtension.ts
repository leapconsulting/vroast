/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function getAdminServiceByNameVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, serviceNameArg?: string): vCloud.AdminService {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getAdminServiceByName(serviceNameArg);
}
}
