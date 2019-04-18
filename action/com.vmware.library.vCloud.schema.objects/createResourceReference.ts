/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createResourceReference(nameArg?: string, statusArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourceReference();
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
