/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createComputeCapacity(cpuArg?: any, memoryArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclComputeCapacity();
result["cpu"] = cpuArg;
result["memory"] = memoryArg;
return result;
}
}
