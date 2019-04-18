/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createPropertyConfigurationValue(configurationArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclPropertyConfigurationValue();
result["value"] = valueArg;
result["configuration"] = configurationArg;
return result;
}
}
