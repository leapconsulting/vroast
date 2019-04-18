/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function getServicesVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension): Array<vCloud.AdminService> {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.getServices();
}
}
