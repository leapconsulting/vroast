/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpsecVpnSubnet(gatewayArg?: string, nameArg?: string, netmaskArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpsecVpnSubnet();
result["gateway"] = gatewayArg;
result["netmask"] = netmaskArg;
result["name"] = nameArg;
return result;
}
}
