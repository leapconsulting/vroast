/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createCimBase64Binary(valueArg?: byte[]): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCimBase64Binary();
result["value"] = valueArg;
return result;
}
}
