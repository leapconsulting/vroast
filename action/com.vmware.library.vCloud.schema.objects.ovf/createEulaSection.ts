/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createEulaSection(infoArg?: any, licenseArg?: any, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEulaSection();
result["info"] = infoArg;
result["required"] = requiredArg;
result["license"] = licenseArg;
return result;
}
}
