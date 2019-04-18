/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVAppNetworkRecord(dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, ipScopeIdArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string, vAppArg?: string, vAppNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVAppNetworkRecord();
result["metadata"] = metadataArg;
result["dns1"] = dns1Arg;
result["dns2"] = dns2Arg;
result["gateway"] = gatewayArg;
result["ipScopeId"] = ipScopeIdArg;
result["netmask"] = netmaskArg;
result["isIpScopeInherited"] = isIpScopeInheritedArg;
result["isBusy"] = isBusyArg;
result["vApp"] = vAppArg;
result["dnsSuffix"] = dnsSuffixArg;
result["name"] = nameArg;
result["vAppName"] = vAppNameArg;
return result;
}
}
