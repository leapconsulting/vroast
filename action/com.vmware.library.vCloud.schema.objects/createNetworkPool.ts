/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkPool(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, statusArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkPool();
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
