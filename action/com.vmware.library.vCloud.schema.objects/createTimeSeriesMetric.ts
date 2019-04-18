/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createTimeSeriesMetric(expectedIntervalArg?: number, nameArg?: string, sampleArg?: Array<any>, unitArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclTimeSeriesMetric();
var items = result["sample"];
for (var obj of sampleArg) {
	items.add(obj);
}
result["expectedInterval"] = expectedIntervalArg;
result["unit"] = unitArg;
result["name"] = nameArg;
return result;
}
}
