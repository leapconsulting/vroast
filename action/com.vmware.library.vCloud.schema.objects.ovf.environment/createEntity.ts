/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
export function createEntity(sectionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEntity();
var items = result["section"];
for (var obj of sectionArg) {
	items.add(obj);
}
return result;
}
}
