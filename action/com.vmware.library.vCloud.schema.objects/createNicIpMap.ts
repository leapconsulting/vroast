/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNicIpMap(entryArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNicIpMap();
var items = result["entry"];
for (var obj of entryArg) {
	items.add(obj);
}
return result;
}
}
