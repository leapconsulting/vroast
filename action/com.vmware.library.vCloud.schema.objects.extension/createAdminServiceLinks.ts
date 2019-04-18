/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAdminServiceLinks(serviceLinkArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminServiceLinks();
var items = result["serviceLink"];
for (var obj of serviceLinkArg) {
	items.add(obj);
}
return result;
}
}
