/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVmAffinityRules(vmAffinityRuleArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmAffinityRules();
var items = result["vmAffinityRule"];
for (var obj of vmAffinityRuleArg) {
	items.add(obj);
}
return result;
}
}
