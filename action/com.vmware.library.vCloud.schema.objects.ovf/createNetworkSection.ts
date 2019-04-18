/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createNetworkSection(infoArg?: any, networkArg?: Array<any>, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkSection();
result["info"] = infoArg;
result["required"] = requiredArg;
var items = result["network"];
for (var obj of networkArg) {
	items.add(obj);
}
return result;
}
}
