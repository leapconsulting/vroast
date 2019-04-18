/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFirewallRule(descriptionArg?: string, destinationIpArg?: string, destinationPortRangeArg?: string, destinationVmArg?: any, directionArg?: string, enableLoggingArg?: boolean, icmpSubTypeArg?: string, isEnabledArg?: boolean, matchOnTranslateArg?: boolean, policyArg?: string, portArg?: number, protocolsArg?: any, sourceIpArg?: string, sourcePortArg?: number, sourcePortRangeArg?: string, sourceVmArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFirewallRule();
result["policy"] = policyArg;
result["protocols"] = protocolsArg;
result["direction"] = directionArg;
result["destinationPortRange"] = destinationPortRangeArg;
result["destinationIp"] = destinationIpArg;
result["destinationVm"] = destinationVmArg;
result["sourcePort"] = sourcePortArg;
result["sourcePortRange"] = sourcePortRangeArg;
result["sourceIp"] = sourceIpArg;
result["sourceVm"] = sourceVmArg;
result["enableLogging"] = enableLoggingArg;
result["isEnabled"] = isEnabledArg;
result["icmpSubType"] = icmpSubTypeArg;
result["matchOnTranslate"] = matchOnTranslateArg;
result["port"] = portArg;
result["description"] = descriptionArg;
return result;
}
}
