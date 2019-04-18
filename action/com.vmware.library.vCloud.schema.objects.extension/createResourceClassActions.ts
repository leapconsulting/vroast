/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createResourceClassActions(resourceClassActionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourceClassActions();
var items = result["resourceClassAction"];
for (var obj of resourceClassActionArg) {
	items.add(obj);
}
return result;
}
}
