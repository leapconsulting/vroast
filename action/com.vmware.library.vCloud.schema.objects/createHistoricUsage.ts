/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createHistoricUsage(metricSeriesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclHistoricUsage();
var items = result["metricSeries"];
for (var obj of metricSeriesArg) {
	items.add(obj);
}
return result;
}
}
