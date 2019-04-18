/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createNetwork(descriptionArg?: any, nameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetwork();
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
