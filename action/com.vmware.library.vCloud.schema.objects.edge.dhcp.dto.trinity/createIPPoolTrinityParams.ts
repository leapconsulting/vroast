/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
export function createIPPoolTrinityParams(allowHugeRangeArg?: boolean, autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, ipRangeArg?: string, leaseTimeArg?: string, nextServerArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIPPoolTrinityParams();
result["defaultGateway"] = defaultGatewayArg;
result["domainName"] = domainNameArg;
result["ipRange"] = ipRangeArg;
result["primaryNameServer"] = primaryNameServerArg;
result["dnsType"] = dnsTypeArg;
result["dhcpOptions"] = dhcpOptionsArg;
result["nextServer"] = nextServerArg;
result["allowHugeRange"] = allowHugeRangeArg;
result["secondaryNameServer"] = secondaryNameServerArg;
result["subnetMask"] = subnetMaskArg;
result["autoConfigureDNS"] = autoConfigureDNSArg;
result["leaseTime"] = leaseTimeArg;
return result;
}
}
