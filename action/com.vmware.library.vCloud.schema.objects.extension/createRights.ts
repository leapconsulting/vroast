/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createRights(rightArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRights();
var items = result["right"];
for (var obj of rightArg) {
	items.add(obj);
}
return result;
}
}
