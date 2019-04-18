/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createManagedServerMetrics(managedServerArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclManagedServerMetrics();
var items = result["managedServer"];
for (var obj of managedServerArg) {
	items.add(obj);
}
return result;
}
}
