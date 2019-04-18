/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createHistoricUsageSpec(absoluteEndTimeArg?: any, absoluteStartTimeArg?: any, metricPatternArg?: Array<string>, relativeEndTimeArg?: any, relativeStartTimeArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclHistoricUsageSpec();
var items = result["metricPattern"];
for (var obj of metricPatternArg) {
	items.add(obj);
}
result["relativeStartTime"] = relativeStartTimeArg;
result["absoluteEndTime"] = absoluteEndTimeArg;
result["relativeEndTime"] = relativeEndTimeArg;
result["absoluteStartTime"] = absoluteStartTimeArg;
return result;
}
}
