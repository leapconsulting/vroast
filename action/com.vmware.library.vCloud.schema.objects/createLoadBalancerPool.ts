/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLoadBalancerPool(descriptionArg?: string, errorDetailsArg?: string, memberArg?: Array<any>, nameArg?: string, operationalArg?: boolean, servicePortArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLoadBalancerPool();
var items = result["member"];
for (var obj of memberArg) {
	items.add(obj);
}
result["operational"] = operationalArg;
result["errorDetails"] = errorDetailsArg;
var items = result["servicePort"];
for (var obj of servicePortArg) {
	items.add(obj);
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
