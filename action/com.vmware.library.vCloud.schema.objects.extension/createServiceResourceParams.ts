/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createServiceResourceParams(descriptionArg?: string, externalObjectIdArg?: string, nameArg?: string, operationKeyArg?: string, orgArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclServiceResourceParams();
if ((orgArg == null) || (orgArg instanceof VclReference)) {
	result["org"] = orgArg;
} else {
	result["org"] = orgArg.getReference();
}
result["externalObjectId"] = externalObjectIdArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
