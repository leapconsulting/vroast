/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVendorTemplate(nameArg?: string, vendorTemplateAttributesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVendorTemplate();
var items = result["vendorTemplateAttributes"];
for (var obj of vendorTemplateAttributesArg) {
	items.add(obj);
}
result["name"] = nameArg;
return result;
}
}
