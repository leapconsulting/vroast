/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createQualifierBoolean(qualifierArg?: boolean, valueArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQualifierBoolean();
result["value"] = valueArg;
result["qualifier"] = qualifierArg;
return result;
}
}
