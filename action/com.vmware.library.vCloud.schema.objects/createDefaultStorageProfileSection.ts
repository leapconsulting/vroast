/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDefaultStorageProfileSection(infoArg?: any, requiredArg?: boolean, storageProfileArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDefaultStorageProfileSection();
result["info"] = infoArg;
result["storageProfile"] = storageProfileArg;
result["required"] = requiredArg;
return result;
}
}
