/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminOrgNetworkRecord(dns1Arg?: string, dns2Arg?: string, gatewayArg?: string, ipScopeIdArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string, networkPoolArg?: string, networkPoolNameArg?: string, orgArg?: string, orgNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminOrgNetworkRecord();
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["dns1"] = dns1Arg;
result["dns2"] = dns2Arg;
result["gateway"] = gatewayArg;
result["ipScopeId"] = ipScopeIdArg;
result["netmask"] = netmaskArg;
result["networkPool"] = networkPoolArg;
result["networkPoolName"] = networkPoolNameArg;
result["isIpScopeInherited"] = isIpScopeInheritedArg;
result["isBusy"] = isBusyArg;
result["orgName"] = orgNameArg;
result["name"] = nameArg;
return result;
}
}
