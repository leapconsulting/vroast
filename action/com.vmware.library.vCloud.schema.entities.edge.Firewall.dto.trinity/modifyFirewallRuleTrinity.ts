/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.edge.Firewall.dto.trinity {
export function modifyFirewallRuleTrinity(targetEntityArg?: vCloud.FirewallRule, actionArg?: string, applicationArg?: any, descriptionArg?: string, destinationArg?: any, directionArg?: string, enabledArg?: boolean, invalidApplicationArg?: boolean, invalidDestinationArg?: boolean, invalidSourceArg?: boolean, loggingEnabledArg?: boolean, matchTranslatedArg?: boolean, nameArg?: string, ruleIdArg?: number, ruleTagArg?: number, ruleTypeArg?: string, sourceArg?: any, statisticsArg?: any): vCloud.FirewallRule {// WARNING: Auto generated code. Please, do not edit this code.
if (sourceArg != null) {
	targetEntityArg["source"] = sourceArg;
}
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (ruleTypeArg != null) {
	targetEntityArg["ruleType"] = ruleTypeArg;
}
if (directionArg != null) {
	targetEntityArg["direction"] = directionArg;
}
if (statisticsArg != null) {
	targetEntityArg["statistics"] = statisticsArg;
}
if (ruleIdArg != null) {
	targetEntityArg["ruleId"] = ruleIdArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (loggingEnabledArg != null) {
	targetEntityArg["loggingEnabled"] = loggingEnabledArg;
}
if (invalidSourceArg != null) {
	targetEntityArg["invalidSource"] = invalidSourceArg;
}
if (invalidDestinationArg != null) {
	targetEntityArg["invalidDestination"] = invalidDestinationArg;
}
if (invalidApplicationArg != null) {
	targetEntityArg["invalidApplication"] = invalidApplicationArg;
}
if (ruleTagArg != null) {
	targetEntityArg["ruleTag"] = ruleTagArg;
}
if (matchTranslatedArg != null) {
	targetEntityArg["matchTranslated"] = matchTranslatedArg;
}
if (destinationArg != null) {
	targetEntityArg["destination"] = destinationArg;
}
if (applicationArg != null) {
	targetEntityArg["application"] = applicationArg;
}
if (actionArg != null) {
	targetEntityArg["action"] = actionArg;
}
return targetEntityArg;
}
}
