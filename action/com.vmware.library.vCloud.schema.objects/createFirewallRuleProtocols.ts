/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFirewallRuleProtocols(anyArg?: boolean, icmpArg?: boolean, otherArg?: string, tcpArg?: boolean, udpArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFirewallRuleProtocols();
result["tcp"] = tcpArg;
result["udp"] = udpArg;
result["icmp"] = icmpArg;
result["any"] = anyArg;
result["other"] = otherArg;
return result;
}
}
