/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDhcpPoolService(defaultLeaseTimeArg?: number, highIpAddressArg?: string, isEnabledArg?: boolean, lowIpAddressArg?: string, maxLeaseTimeArg?: number, networkArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDhcpPoolService();
result["maxLeaseTime"] = maxLeaseTimeArg;
result["isEnabled"] = isEnabledArg;
result["defaultLeaseTime"] = defaultLeaseTimeArg;
result["lowIpAddress"] = lowIpAddressArg;
result["highIpAddress"] = highIpAddressArg;
if ((networkArg == null) || (networkArg instanceof VclReference)) {
	result["network"] = networkArg;
} else {
	result["network"] = networkArg.getReference();
}
return result;
}
}
