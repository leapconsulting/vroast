/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWStorageProfile(dataStoreRefsArg?: any, freeStorageMbArg?: number, moRefArg?: string, nameArg?: string, totalStorageMbArg?: number, vimObjectTypeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWStorageProfile();
result["totalStorageMb"] = totalStorageMbArg;
result["moRef"] = moRefArg;
result["vimObjectType"] = vimObjectTypeArg;
result["freeStorageMb"] = freeStorageMbArg;
result["dataStoreRefs"] = dataStoreRefsArg;
result["name"] = nameArg;
return result;
}
}
