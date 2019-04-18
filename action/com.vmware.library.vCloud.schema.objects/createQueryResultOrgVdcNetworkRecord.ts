/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultOrgVdcNetworkRecord(connectedToArg?: string, defaultGatewayArg?: string, dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, isBusyArg?: boolean, isIpScopeInheritedArg?: boolean, isSharedArg?: boolean, linkTypeArg?: number, metadataArg?: any, nameArg?: string, netmaskArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultOrgVdcNetworkRecord();
result["isShared"] = isSharedArg;
result["metadata"] = metadataArg;
result["dns1"] = dns1Arg;
result["dns2"] = dns2Arg;
result["netmask"] = netmaskArg;
result["isIpScopeInherited"] = isIpScopeInheritedArg;
result["isBusy"] = isBusyArg;
result["vdcName"] = vdcNameArg;
result["vdc"] = vdcArg;
result["dnsSuffix"] = dnsSuffixArg;
result["defaultGateway"] = defaultGatewayArg;
result["connectedTo"] = connectedToArg;
result["linkType"] = linkTypeArg;
result["name"] = nameArg;
return result;
}
}
