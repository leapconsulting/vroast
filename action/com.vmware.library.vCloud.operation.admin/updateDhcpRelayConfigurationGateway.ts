/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin {
export function updateDhcpRelayConfigurationGateway(targetEntityArg?: vCloud.Gateway, ipAddrsArg?: String[], domainNamesArg?: String[], ipSetNamesArg?: String[], gatewayInterfaceArg?: string): vCloud.Gateway {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateDhcpRelayConfiguration(ipAddrsArg,domainNamesArg,ipSetNamesArg,gatewayInterfaceArg);
}
}
