/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWVdcTemplateProviderVdcSpecification(bindingArg?: Array<any>, nameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWVdcTemplateProviderVdcSpecification();
result["name"] = nameArg;
var items = result["binding"];
for (var obj of bindingArg) {
	items.add(obj);
}
return result;
}
}
