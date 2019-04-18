/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createVirtualSystemCollection(contentArg?: Array<any>, infoArg?: any, nameArg?: any, sectionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVirtualSystemCollection();
result["info"] = infoArg;
var items = result["section"];
for (var obj of sectionArg) {
	items.add(obj);
}
result["name"] = nameArg;
var items = result["content"];
for (var obj of contentArg) {
	items.add(obj);
}
return result;
}
}
