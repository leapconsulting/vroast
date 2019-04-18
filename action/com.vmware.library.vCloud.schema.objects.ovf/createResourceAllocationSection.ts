/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createResourceAllocationSection(infoArg?: any, itemArg?: Array<any>, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourceAllocationSection();
result["info"] = infoArg;
var items = result["item"];
for (var obj of itemArg) {
	items.add(obj);
}
result["required"] = requiredArg;
return result;
}
}
