/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createMetadataDomainTag(valueArg?: string, visibilityArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclMetadataDomainTag();
result["visibility"] = visibilityArg;
result["value"] = valueArg;
return result;
}
}
