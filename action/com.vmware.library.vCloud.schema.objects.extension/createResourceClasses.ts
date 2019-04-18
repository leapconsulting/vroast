/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createResourceClasses(resourceClassArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourceClasses();
var items = result["resourceClass"];
for (var obj of resourceClassArg) {
	items.add(obj);
}
return result;
}
}
