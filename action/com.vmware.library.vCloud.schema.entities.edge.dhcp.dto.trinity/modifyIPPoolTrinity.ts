/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.edge.dhcp.dto.trinity {
export function modifyIPPoolTrinity(targetEntityArg?: vCloud.DHCPIpPool, allowHugeRangeArg?: boolean, autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, ipRangeArg?: string, leaseTimeArg?: string, nextServerArg?: string, poolIdArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string): vCloud.DHCPIpPool {// WARNING: Auto generated code. Please, do not edit this code.
if (poolIdArg != null) {
	targetEntityArg["poolId"] = poolIdArg;
}
if (defaultGatewayArg != null) {
	targetEntityArg["defaultGateway"] = defaultGatewayArg;
}
if (domainNameArg != null) {
	targetEntityArg["domainName"] = domainNameArg;
}
if (ipRangeArg != null) {
	targetEntityArg["ipRange"] = ipRangeArg;
}
if (primaryNameServerArg != null) {
	targetEntityArg["primaryNameServer"] = primaryNameServerArg;
}
if (dnsTypeArg != null) {
	targetEntityArg["dnsType"] = dnsTypeArg;
}
if (dhcpOptionsArg != null) {
	targetEntityArg["dhcpOptions"] = dhcpOptionsArg;
}
if (nextServerArg != null) {
	targetEntityArg["nextServer"] = nextServerArg;
}
if (allowHugeRangeArg != null) {
	targetEntityArg["allowHugeRange"] = allowHugeRangeArg;
}
if (secondaryNameServerArg != null) {
	targetEntityArg["secondaryNameServer"] = secondaryNameServerArg;
}
if (subnetMaskArg != null) {
	targetEntityArg["subnetMask"] = subnetMaskArg;
}
if (autoConfigureDNSArg != null) {
	targetEntityArg["autoConfigureDNS"] = autoConfigureDNSArg;
}
if (leaseTimeArg != null) {
	targetEntityArg["leaseTime"] = leaseTimeArg;
}
return targetEntityArg;
}
}
