/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkFeatures(networkServiceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkFeatures();
var items = result["networkService"];
for (var obj of networkServiceArg) {
	items.add(obj);
}
return result;
}
}
