/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLink(nameArg?: string, relArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLink();
result["rel"] = relArg;
result["name"] = nameArg;
return result;
}
}
