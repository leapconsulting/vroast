/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFirewallService(defaultActionArg?: string, firewallRuleArg?: Array<any>, isEnabledArg?: boolean, logDefaultActionArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFirewallService();
var items = result["firewallRule"];
for (var obj of firewallRuleArg) {
	items.add(obj);
}
result["isEnabled"] = isEnabledArg;
result["logDefaultAction"] = logDefaultActionArg;
result["defaultAction"] = defaultActionArg;
return result;
}
}
