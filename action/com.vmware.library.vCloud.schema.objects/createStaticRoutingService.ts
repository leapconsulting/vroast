/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createStaticRoutingService(isEnabledArg?: boolean, staticRouteArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStaticRoutingService();
result["isEnabled"] = isEnabledArg;
var items = result["staticRoute"];
for (var obj of staticRouteArg) {
	items.add(obj);
}
return result;
}
}
