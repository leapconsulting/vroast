/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createProperty(keyArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProperty();
result["value"] = valueArg;
result["key"] = keyArg;
return result;
}
}
