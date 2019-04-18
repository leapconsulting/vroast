/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createProductSection(appUrlArg?: any, categoryOrPropertyArg?: Array<any>, clazzArg?: string, fullVersionArg?: any, iconArg?: Array<any>, infoArg?: any, instanceArg?: string, productArg?: any, productUrlArg?: any, requiredArg?: boolean, vendorArg?: any, vendorUrlArg?: any, versionArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProductSection();
result["version"] = versionArg;
result["info"] = infoArg;
var items = result["icon"];
for (var obj of iconArg) {
	items.add(obj);
}
result["vendor"] = vendorArg;
var items = result["categoryOrProperty"];
for (var obj of categoryOrPropertyArg) {
	items.add(obj);
}
result["product"] = productArg;
result["fullVersion"] = fullVersionArg;
result["productUrl"] = productUrlArg;
result["vendorUrl"] = vendorUrlArg;
result["appUrl"] = appUrlArg;
result["required"] = requiredArg;
result["instance"] = instanceArg;
result["clazz"] = clazzArg;
return result;
}
}
