/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createStartupSection(infoArg?: any, itemArg?: Array<any>, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStartupSection();
result["info"] = infoArg;
var items = result["item"];
for (var obj of itemArg) {
	items.add(obj);
}
result["required"] = requiredArg;
return result;
}
}
