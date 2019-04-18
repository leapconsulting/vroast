/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createApiFilters(apiFilterArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclApiFilters();
var items = result["apiFilter"];
for (var obj of apiFilterArg) {
	items.add(obj);
}
return result;
}
}
