/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLBPoolMember(ipAddressArg?: string, servicePortArg?: Array<any>, weightArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLBPoolMember();
result["ipAddress"] = ipAddressArg;
var items = result["servicePort"];
for (var obj of servicePortArg) {
	items.add(obj);
}
result["weight"] = weightArg;
return result;
}
}
