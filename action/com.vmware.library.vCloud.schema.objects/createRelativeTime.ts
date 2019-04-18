/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRelativeTime(intervalArg?: number, unitArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRelativeTime();
result["interval"] = intervalArg;
result["unit"] = unitArg;
return result;
}
}
