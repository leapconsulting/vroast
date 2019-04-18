/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.dto {
export function createKeyValueParams(keyArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclKeyValueParams();
result["value"] = valueArg;
result["key"] = keyArg;
return result;
}
}
