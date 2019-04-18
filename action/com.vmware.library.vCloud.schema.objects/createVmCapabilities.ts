/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVmCapabilities(cpuHotAddEnabledArg?: boolean, memoryHotAddEnabledArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmCapabilities();
result["memoryHotAddEnabled"] = memoryHotAddEnabledArg;
result["cpuHotAddEnabled"] = cpuHotAddEnabledArg;
return result;
}
}
