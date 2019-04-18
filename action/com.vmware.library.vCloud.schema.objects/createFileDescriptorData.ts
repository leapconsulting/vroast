/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFileDescriptorData(descriptionArg?: string, fileArg?: any, operationKeyArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFileDescriptorData();
result["operationKey"] = operationKeyArg;
if ((fileArg == null) || (fileArg instanceof VclReference)) {
	result["file"] = fileArg;
} else {
	result["file"] = fileArg.getReference();
}
result["description"] = descriptionArg;
return result;
}
}
