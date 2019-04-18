/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNatRule(descriptionArg?: string, gatewayNatRuleArg?: any, isEnabledArg?: boolean, oneToOneBasicRuleArg?: any, oneToOneVmRuleArg?: any, portForwardingRuleArg?: any, ruleTypeArg?: string, vmRuleArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatRule();
result["ruleType"] = ruleTypeArg;
result["gatewayNatRule"] = gatewayNatRuleArg;
result["oneToOneBasicRule"] = oneToOneBasicRuleArg;
result["oneToOneVmRule"] = oneToOneVmRuleArg;
result["portForwardingRule"] = portForwardingRuleArg;
result["vmRule"] = vmRuleArg;
result["isEnabled"] = isEnabledArg;
result["description"] = descriptionArg;
return result;
}
}
