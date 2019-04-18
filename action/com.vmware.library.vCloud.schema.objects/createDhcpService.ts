/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDhcpService(defaultLeaseTimeArg?: number, domainNameArg?: string, ipRangeArg?: any, isEnabledArg?: boolean, maxLeaseTimeArg?: number, primaryNameServerArg?: string, routerIpArg?: string, secondaryNameServerArg?: string, subMaskArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDhcpService();
result["maxLeaseTime"] = maxLeaseTimeArg;
result["isEnabled"] = isEnabledArg;
result["defaultLeaseTime"] = defaultLeaseTimeArg;
result["domainName"] = domainNameArg;
result["ipRange"] = ipRangeArg;
result["primaryNameServer"] = primaryNameServerArg;
result["routerIp"] = routerIpArg;
result["subMask"] = subMaskArg;
result["secondaryNameServer"] = secondaryNameServerArg;
return result;
}
}
