/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSimpleMetric(nameArg?: string, unitArg?: string, valueArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSimpleMetric();
result["unit"] = unitArg;
result["name"] = nameArg;
result["value"] = valueArg;
return result;
}
}
