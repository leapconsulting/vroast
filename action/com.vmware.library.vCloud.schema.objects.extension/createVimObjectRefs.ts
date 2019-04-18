/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVimObjectRefs(vimObjectRefArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVimObjectRefs();
var items = result["vimObjectRef"];
for (var obj of vimObjectRefArg) {
	items.add(obj);
}
return result;
}
}
