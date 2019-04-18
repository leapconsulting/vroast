/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayIpsecVpnEndpoint(networkArg?: any, publicIpArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayIpsecVpnEndpoint();
if ((networkArg == null) || (networkArg instanceof VclReference)) {
	result["network"] = networkArg;
} else {
	result["network"] = networkArg.getReference();
}
result["publicIp"] = publicIpArg;
return result;
}
}
