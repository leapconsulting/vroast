/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpRanges(ipRangeArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpRanges();
var items = result["ipRange"];
for (var obj of ipRangeArg) {
	items.add(obj);
}
return result;
}
}
