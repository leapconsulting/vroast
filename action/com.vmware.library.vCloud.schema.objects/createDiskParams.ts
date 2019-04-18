/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDiskParams(busSubTypeArg?: string, busTypeArg?: string, descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, ownerArg?: any, sizeArg?: number, statusArg?: number, storageProfileArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDiskParams();
result["owner"] = ownerArg;
if ((storageProfileArg == null) || (storageProfileArg instanceof VclReference)) {
	result["storageProfile"] = storageProfileArg;
} else {
	result["storageProfile"] = storageProfileArg.getReference();
}
result["operationKey"] = operationKeyArg;
result["busType"] = busTypeArg;
result["busSubType"] = busSubTypeArg;
result["name"] = nameArg;
result["size"] = sizeArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
