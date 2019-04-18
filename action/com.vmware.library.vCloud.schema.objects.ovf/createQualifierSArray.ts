/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createQualifierSArray(qualifierArg?: boolean, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQualifierSArray();
result["value"] = valueArg;
result["qualifier"] = qualifierArg;
return result;
}
}
