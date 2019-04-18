/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWNetworkPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, statusArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWNetworkPoolParams();
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
