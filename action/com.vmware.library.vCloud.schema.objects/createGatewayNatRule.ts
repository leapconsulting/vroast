/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayNatRule(icmpSubTypeArg?: string, interfaceArg?: any, originalIpArg?: string, originalPortArg?: string, protocolArg?: string, translatedIpArg?: string, translatedPortArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayNatRule();
result["originalPort"] = originalPortArg;
result["translatedIp"] = translatedIpArg;
result["icmpSubType"] = icmpSubTypeArg;
if ((interfaceArg == null) || (interfaceArg instanceof VclReference)) {
	result["interface"] = interfaceArg;
} else {
	result["interface"] = interfaceArg.getReference();
}
result["translatedPort"] = translatedPortArg;
result["originalIp"] = originalIpArg;
result["protocol"] = protocolArg;
return result;
}
}
