/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkServiceInsertion(categoryArg?: string, categoryTypeArg?: string, nameArg?: string, vendorTemplatesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkServiceInsertion();
result["categoryType"] = categoryTypeArg;
var items = result["vendorTemplates"];
for (var obj of vendorTemplatesArg) {
	items.add(obj);
}
result["category"] = categoryArg;
result["name"] = nameArg;
return result;
}
}
