/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.nat.dto {
export function createNatRuleParams(actionArg?: string, descriptionArg?: string, enabledArg?: boolean, icmpTypeArg?: string, loggingEnabledArg?: boolean, originalAddressArg?: string, originalPortArg?: string, protocolArg?: string, ruleTagArg?: number, ruleTypeArg?: string, translatedAddressArg?: string, translatedPortArg?: string, vnicArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatRuleParams();
result["enabled"] = enabledArg;
result["ruleType"] = ruleTypeArg;
result["originalPort"] = originalPortArg;
result["translatedPort"] = translatedPortArg;
result["protocol"] = protocolArg;
result["description"] = descriptionArg;
result["loggingEnabled"] = loggingEnabledArg;
result["ruleTag"] = ruleTagArg;
result["originalAddress"] = originalAddressArg;
result["translatedAddress"] = translatedAddressArg;
result["icmpType"] = icmpTypeArg;
result["action"] = actionArg;
result["vnic"] = vnicArg;
return result;
}
}
