/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createResourcePool(dataStoreRefsArg?: any, descriptionArg?: string, moRefArg?: string, nameArg?: string, operationKeyArg?: string, vimObjectTypeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourcePool();
result["moRef"] = moRefArg;
result["vimObjectType"] = vimObjectTypeArg;
result["dataStoreRefs"] = dataStoreRefsArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
