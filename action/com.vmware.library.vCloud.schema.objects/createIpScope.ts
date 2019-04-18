/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpScope(allocatedIpAddressesArg?: any, dns1Arg?: string, dns2Arg?: string, dnsSuffixArg?: string, gatewayArg?: string, ipRangesArg?: any, isEnabledArg?: boolean, isInheritedArg?: boolean, netmaskArg?: string, subAllocationsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpScope();
result["allocatedIpAddresses"] = allocatedIpAddressesArg;
result["isInherited"] = isInheritedArg;
result["dns1"] = dns1Arg;
result["dns2"] = dns2Arg;
result["gateway"] = gatewayArg;
result["netmask"] = netmaskArg;
result["isEnabled"] = isEnabledArg;
result["ipRanges"] = ipRangesArg;
result["dnsSuffix"] = dnsSuffixArg;
result["subAllocations"] = subAllocationsArg;
return result;
}
}
