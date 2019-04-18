/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAllocatedIpAddresses(ipAddressArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAllocatedIpAddresses();
var items = result["ipAddress"];
for (var obj of ipAddressArg) {
	items.add(obj);
}
return result;
}
}
