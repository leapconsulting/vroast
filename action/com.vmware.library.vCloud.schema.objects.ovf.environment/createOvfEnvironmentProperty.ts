/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
export function createOvfEnvironmentProperty(keyArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOvfEnvironmentProperty();
result["value"] = valueArg;
result["key"] = keyArg;
return result;
}
}
