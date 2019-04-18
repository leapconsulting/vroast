/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCurrentUsage(metricArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCurrentUsage();
var items = result["metric"];
for (var obj of metricArg) {
	items.add(obj);
}
return result;
}
}
