/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createStrandedItemVimObject(errorMessageArg?: string, nameArg?: string, vimObjectRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStrandedItemVimObject();
result["vimObjectRef"] = vimObjectRefArg;
result["name"] = nameArg;
result["errorMessage"] = errorMessageArg;
return result;
}
}
