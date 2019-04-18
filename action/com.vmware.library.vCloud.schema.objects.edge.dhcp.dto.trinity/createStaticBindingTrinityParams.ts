/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
export function createStaticBindingTrinityParams(autoConfigureDNSArg?: boolean, defaultGatewayArg?: string, dhcpOptionsArg?: any, dnsTypeArg?: string, domainNameArg?: string, hostnameArg?: string, ipAddressArg?: string, leaseTimeArg?: string, macAddressArg?: string, nextServerArg?: string, primaryNameServerArg?: string, secondaryNameServerArg?: string, subnetMaskArg?: string, vmIdArg?: string, vmNameArg?: string, vnicIdArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStaticBindingTrinityParams();
result["vmName"] = vmNameArg;
result["ipAddress"] = ipAddressArg;
result["defaultGateway"] = defaultGatewayArg;
result["domainName"] = domainNameArg;
result["macAddress"] = macAddressArg;
result["primaryNameServer"] = primaryNameServerArg;
result["dnsType"] = dnsTypeArg;
result["dhcpOptions"] = dhcpOptionsArg;
result["nextServer"] = nextServerArg;
result["secondaryNameServer"] = secondaryNameServerArg;
result["vnicId"] = vnicIdArg;
result["vmId"] = vmIdArg;
result["hostname"] = hostnameArg;
result["subnetMask"] = subnetMaskArg;
result["autoConfigureDNS"] = autoConfigureDNSArg;
result["leaseTime"] = leaseTimeArg;
return result;
}
}
