/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createInstantiationParams(sectionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclInstantiationParams();
var items = result["section"];
for (var obj of sectionArg) {
	items.add(obj);
}
return result;
}
}
