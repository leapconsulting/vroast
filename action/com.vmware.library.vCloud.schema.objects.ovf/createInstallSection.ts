/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createInstallSection(infoArg?: any, initialBootStopDelayArg?: number, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclInstallSection();
result["info"] = infoArg;
result["required"] = requiredArg;
result["initialBootStopDelay"] = initialBootStopDelayArg;
return result;
}
}
