/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function isServiceAlreadyRegisteredVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, serviceNameArg?: string): boolean {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.isServiceAlreadyRegistered(serviceNameArg);
}
}
