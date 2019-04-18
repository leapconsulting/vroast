/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNatPortForwardingRule(externalIpAddressArg?: string, externalPortArg?: number, internalIpAddressArg?: string, internalPortArg?: number, protocolArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatPortForwardingRule();
result["externalIpAddress"] = externalIpAddressArg;
result["externalPort"] = externalPortArg;
result["internalPort"] = internalPortArg;
result["internalIpAddress"] = internalIpAddressArg;
result["protocol"] = protocolArg;
return result;
}
}
