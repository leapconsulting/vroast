/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createQualifierUInt32(qualifierArg?: boolean, valueArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQualifierUInt32();
result["value"] = valueArg;
result["qualifier"] = qualifierArg;
return result;
}
}
