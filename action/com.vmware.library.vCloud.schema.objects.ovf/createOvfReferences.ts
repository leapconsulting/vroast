/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createOvfReferences(fileArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOvfReferences();
var items = result["file"];
for (var obj of fileArg) {
	items.add(obj);
}
return result;
}
}
