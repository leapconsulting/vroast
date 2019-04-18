/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCurrentUsageSpec(metricPatternArg?: Array<string>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCurrentUsageSpec();
var items = result["metricPattern"];
for (var obj of metricPatternArg) {
	items.add(obj);
}
return result;
}
}
