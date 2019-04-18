/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createVirtualHardwareSection(infoArg?: any, itemArg?: Array<any>, requiredArg?: boolean, systemArg?: any, transportArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVirtualHardwareSection();
result["info"] = infoArg;
result["system"] = systemArg;
var items = result["item"];
for (var obj of itemArg) {
	items.add(obj);
}
result["transport"] = transportArg;
result["required"] = requiredArg;
return result;
}
}
