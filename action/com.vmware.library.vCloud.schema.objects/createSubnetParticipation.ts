/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSubnetParticipation(gatewayArg?: string, ipAddressArg?: string, ipRangesArg?: any, netmaskArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSubnetParticipation();
result["gateway"] = gatewayArg;
result["netmask"] = netmaskArg;
result["ipAddress"] = ipAddressArg;
result["ipRanges"] = ipRangesArg;
return result;
}
}
