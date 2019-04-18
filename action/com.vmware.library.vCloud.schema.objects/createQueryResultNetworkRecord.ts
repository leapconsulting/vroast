/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultNetworkRecord(dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, ipScopeIdArg?: string, isBusyArg?: boolean, metadataArg?: any, nameArg?: string, netmaskArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultNetworkRecord();
result["metadata"] = metadataArg;
result["dns1"] = dns1Arg;
result["dns2"] = dns2Arg;
result["gateway"] = gatewayArg;
result["ipScopeId"] = ipScopeIdArg;
result["netmask"] = netmaskArg;
result["isBusy"] = isBusyArg;
result["dnsSuffix"] = dnsSuffixArg;
result["name"] = nameArg;
return result;
}
}
