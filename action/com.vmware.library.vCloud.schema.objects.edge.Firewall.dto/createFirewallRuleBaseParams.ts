/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto {
export function createFirewallRuleBaseParams(descriptionArg?: string, directionArg?: string, enabledArg?: boolean, invalidApplicationArg?: boolean, invalidDestinationArg?: boolean, invalidSourceArg?: boolean, loggingEnabledArg?: boolean, matchTranslatedArg?: boolean, nameArg?: string, ruleIdArg?: number, ruleTagArg?: number, ruleTypeArg?: string, statisticsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFirewallRuleBaseParams();
result["enabled"] = enabledArg;
result["ruleType"] = ruleTypeArg;
result["direction"] = directionArg;
result["statistics"] = statisticsArg;
result["ruleId"] = ruleIdArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["loggingEnabled"] = loggingEnabledArg;
result["invalidSource"] = invalidSourceArg;
result["invalidDestination"] = invalidDestinationArg;
result["invalidApplication"] = invalidApplicationArg;
result["ruleTag"] = ruleTagArg;
result["matchTranslated"] = matchTranslatedArg;
return result;
}
}
