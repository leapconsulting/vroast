/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAclRules(aclRuleArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAclRules();
var items = result["aclRule"];
for (var obj of aclRuleArg) {
	items.add(obj);
}
return result;
}
}
