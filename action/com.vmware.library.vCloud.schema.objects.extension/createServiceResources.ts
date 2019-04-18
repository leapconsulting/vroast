/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createServiceResources(serviceResourceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclServiceResources();
var items = result["serviceResource"];
for (var obj of serviceResourceArg) {
	items.add(obj);
}
return result;
}
}
