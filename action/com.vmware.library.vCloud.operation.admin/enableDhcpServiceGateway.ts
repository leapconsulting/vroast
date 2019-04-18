/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function enableDhcpServiceGateway(targetEntityArg?: vCloud.Gateway, enableArg?: boolean): vCloud.Gateway {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.enableDhcpService(enableArg);
}
}
