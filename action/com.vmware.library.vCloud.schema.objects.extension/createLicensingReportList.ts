/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLicensingReportList(reportArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLicensingReportList();
var items = result["report"];
for (var obj of reportArg) {
	items.add(obj);
}
return result;
}
}
