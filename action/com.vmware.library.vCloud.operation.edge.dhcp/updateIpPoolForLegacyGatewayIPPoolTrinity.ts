/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.edge.dhcp {
export function updateIpPoolForLegacyGatewayIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool, paramsArg?: any, networkNameArg?: string): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.updateIpPoolForLegacyGateway(paramsArg,networkNameArg);
}
}
