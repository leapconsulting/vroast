/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto {
export function createFirewallRuleStatsParams(byteCountArg?: number, connectionCountArg?: number, packetCountArg?: number, timestampArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFirewallRuleStatsParams();
result["timestamp"] = timestampArg;
result["connectionCount"] = connectionCountArg;
result["packetCount"] = packetCountArg;
result["byteCount"] = byteCountArg;
return result;
}
}
