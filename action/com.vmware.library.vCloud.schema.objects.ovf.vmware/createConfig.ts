/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
export function createConfig(keyArg?: string, requiredArg?: boolean, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclConfig();
result["required"] = requiredArg;
result["value"] = valueArg;
result["key"] = keyArg;
return result;
}
}
