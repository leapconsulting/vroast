/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkConfigSection(infoArg?: any, networkConfigArg?: Array<any>, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkConfigSection();
result["info"] = infoArg;
result["required"] = requiredArg;
var items = result["networkConfig"];
for (var obj of networkConfigArg) {
	items.add(obj);
}
return result;
}
}
