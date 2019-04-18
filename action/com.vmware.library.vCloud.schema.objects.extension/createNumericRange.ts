/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createNumericRange(endArg?: number, startArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNumericRange();
result["start"] = startArg;
result["end"] = endArg;
return result;
}
}
