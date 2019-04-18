/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVendorTemplateAttributes(keyArg?: string, nameArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVendorTemplateAttributes();
result["name"] = nameArg;
result["value"] = valueArg;
result["key"] = keyArg;
return result;
}
}
