/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWVdcTemplateBinding(nameArg?: string, valueArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWVdcTemplateBinding();
result["name"] = nameArg;
if ((valueArg == null) || (valueArg instanceof VclReference)) {
	result["value"] = valueArg;
} else {
	result["value"] = valueArg.getReference();
}
return result;
}
}
