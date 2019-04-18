/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.edge.dhcp.dto.trinity {
export function modifyStaticBindingTrinity(targetEntityArg?: vCloud.DHCPBinding, autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, hostnameArg?: string, ipAddressArg?: string, leaseTimeArg?: string, macAddressArg?: string, nextServerArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string, vmIdArg?: string, vmNameArg?: string, vnicIdArg?: number): vCloud.DHCPBinding {// WARNING: Auto generated code. Please, do not edit this code.
if (vmNameArg != null) {
	targetEntityArg["vmName"] = vmNameArg;
}
if (ipAddressArg != null) {
	targetEntityArg["ipAddress"] = ipAddressArg;
}
if (defaultGatewayArg != null) {
	targetEntityArg["defaultGateway"] = defaultGatewayArg;
}
if (domainNameArg != null) {
	targetEntityArg["domainName"] = domainNameArg;
}
if (macAddressArg != null) {
	targetEntityArg["macAddress"] = macAddressArg;
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
if (secondaryNameServerArg != null) {
	targetEntityArg["secondaryNameServer"] = secondaryNameServerArg;
}
if (vnicIdArg != null) {
	targetEntityArg["vnicId"] = vnicIdArg;
}
if (vmIdArg != null) {
	targetEntityArg["vmId"] = vmIdArg;
}
if (hostnameArg != null) {
	targetEntityArg["hostname"] = hostnameArg;
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
