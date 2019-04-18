/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayIpsecVpnService(endpointArg?: Array<any>, isEnabledArg?: boolean, tunnelArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayIpsecVpnService();
var items = result["endpoint"];
for (var obj of endpointArg) {
	items.add(obj);
}
result["isEnabled"] = isEnabledArg;
var items = result["tunnel"];
for (var obj of tunnelArg) {
	items.add(obj);
}
return result;
}
}
