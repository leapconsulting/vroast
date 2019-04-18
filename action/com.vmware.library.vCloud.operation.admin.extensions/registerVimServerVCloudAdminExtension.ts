/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function registerVimServerVCloudAdminExtension(targetEntityArg?: vCloud.HostAdminExtension, serverParamsArg?: any, shieldParamsArg?: any): vCloud.VimServer {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.registerVimServer(serverParamsArg,shieldParamsArg);
}
}
