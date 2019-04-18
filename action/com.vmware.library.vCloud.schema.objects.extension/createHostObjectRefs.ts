/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createHostObjectRefs(hostObjectRefArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclHostObjectRefs();
var items = result["hostObjectRef"];
for (var obj of hostObjectRefArg) {
	items.add(obj);
}
return result;
}
}
