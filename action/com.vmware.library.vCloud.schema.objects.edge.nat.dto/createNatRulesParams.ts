/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.nat.dto {
export function createNatRulesParams(natRulesDtosArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatRulesParams();
var items = result["natRulesDtos"];
for (var obj of natRulesDtosArg) {
	items.add(obj);
}
return result;
}
}
