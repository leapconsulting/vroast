/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.edge.nat.dto {
export function modifyNatRule(targetEntityArg?: vCloud.NatRule, actionArg?: string, descriptionArg?: string, enabledArg?: boolean, icmpTypeArg?: string, loggingEnabledArg?: boolean, originalAddressArg?: string, originalPortArg?: string, protocolArg?: string, ruleIdArg?: number, ruleTagArg?: number, ruleTypeArg?: string, translatedAddressArg?: string, translatedPortArg?: string, vnicArg?: string): vCloud.NatRule {// WARNING: Auto generated code. Please, do not edit this code.
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (ruleTypeArg != null) {
	targetEntityArg["ruleType"] = ruleTypeArg;
}
if (originalPortArg != null) {
	targetEntityArg["originalPort"] = originalPortArg;
}
if (translatedPortArg != null) {
	targetEntityArg["translatedPort"] = translatedPortArg;
}
if (ruleIdArg != null) {
	targetEntityArg["ruleId"] = ruleIdArg;
}
if (protocolArg != null) {
	targetEntityArg["protocol"] = protocolArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (loggingEnabledArg != null) {
	targetEntityArg["loggingEnabled"] = loggingEnabledArg;
}
if (ruleTagArg != null) {
	targetEntityArg["ruleTag"] = ruleTagArg;
}
if (originalAddressArg != null) {
	targetEntityArg["originalAddress"] = originalAddressArg;
}
if (translatedAddressArg != null) {
	targetEntityArg["translatedAddress"] = translatedAddressArg;
}
if (icmpTypeArg != null) {
	targetEntityArg["icmpType"] = icmpTypeArg;
}
if (actionArg != null) {
	targetEntityArg["action"] = actionArg;
}
if (vnicArg != null) {
	targetEntityArg["vnic"] = vnicArg;
}
return targetEntityArg;
}
}
