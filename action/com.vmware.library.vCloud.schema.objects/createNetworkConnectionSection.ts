/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkConnectionSection(infoArg?: any, networkConnectionArg?: Array<any>, primaryNetworkConnectionIndexArg?: number, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkConnectionSection();
result["info"] = infoArg;
result["primaryNetworkConnectionIndex"] = primaryNetworkConnectionIndexArg;
var items = result["networkConnection"];
for (var obj of networkConnectionArg) {
	items.add(obj);
}
result["required"] = requiredArg;
return result;
}
}
