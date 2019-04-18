/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpsecVpnService(externalIpAddressArg?: string, ipsecVpnTunnelArg?: Array<any>, isEnabledArg?: boolean, publicIpAddressArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpsecVpnService();
result["isEnabled"] = isEnabledArg;
result["externalIpAddress"] = externalIpAddressArg;
result["publicIpAddress"] = publicIpAddressArg;
var items = result["ipsecVpnTunnel"];
for (var obj of ipsecVpnTunnelArg) {
	items.add(obj);
}
return result;
}
}
