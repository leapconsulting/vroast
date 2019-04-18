/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminVAppNetworkRecord(dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string, orgArg?: string, vAppArg?: string, vappNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminVAppNetworkRecord();
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["dns1"] = dns1Arg;
result["dns2"] = dns2Arg;
result["gateway"] = gatewayArg;
result["netmask"] = netmaskArg;
result["isIpScopeInherited"] = isIpScopeInheritedArg;
result["isBusy"] = isBusyArg;
result["vApp"] = vAppArg;
result["vappName"] = vappNameArg;
result["dnsSuffix"] = dnsSuffixArg;
result["name"] = nameArg;
return result;
}
}
