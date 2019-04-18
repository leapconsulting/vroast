/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNatService(externalIpArg?: string, isEnabledArg?: boolean, natRuleArg?: Array<any>, natTypeArg?: string, policyArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatService();
result["policy"] = policyArg;
result["isEnabled"] = isEnabledArg;
result["natType"] = natTypeArg;
var items = result["natRule"];
for (var obj of natRuleArg) {
	items.add(obj);
}
result["externalIp"] = externalIpArg;
return result;
}
}
