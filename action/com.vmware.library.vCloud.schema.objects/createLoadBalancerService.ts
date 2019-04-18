/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLoadBalancerService(isEnabledArg?: boolean, poolArg?: Array<any>, virtualServerArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLoadBalancerService();
result["isEnabled"] = isEnabledArg;
var items = result["virtualServer"];
for (var obj of virtualServerArg) {
	items.add(obj);
}
var items = result["pool"];
for (var obj of poolArg) {
	items.add(obj);
}
return result;
}
}
