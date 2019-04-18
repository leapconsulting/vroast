/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
export function createFirewallRuleTrinityParams(actionArg?: string, applicationArg?: any, descriptionArg?: string, destinationArg?: any, directionArg?: string, enabledArg?: boolean, invalidApplicationArg?: boolean, invalidDestinationArg?: boolean, invalidSourceArg?: boolean, loggingEnabledArg?: boolean, matchTranslatedArg?: boolean, nameArg?: string, ruleTagArg?: number, ruleTypeArg?: string, sourceArg?: any, statisticsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFirewallRuleTrinityParams();
result["source"] = sourceArg;
result["enabled"] = enabledArg;
result["ruleType"] = ruleTypeArg;
result["direction"] = directionArg;
result["statistics"] = statisticsArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["loggingEnabled"] = loggingEnabledArg;
result["invalidSource"] = invalidSourceArg;
result["invalidDestination"] = invalidDestinationArg;
result["invalidApplication"] = invalidApplicationArg;
result["ruleTag"] = ruleTagArg;
result["matchTranslated"] = matchTranslatedArg;
result["destination"] = destinationArg;
result["application"] = applicationArg;
result["action"] = actionArg;
return result;
}
}
