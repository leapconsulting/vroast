/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createParams(descriptionArg?: string, nameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclParams();
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
