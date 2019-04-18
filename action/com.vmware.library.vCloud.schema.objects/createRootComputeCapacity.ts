/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRootComputeCapacity(cpuArg?: any, isElasticArg?: boolean, isHAArg?: boolean, memoryArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRootComputeCapacity();
result["isElastic"] = isElasticArg;
result["isHA"] = isHAArg;
result["cpu"] = cpuArg;
result["memory"] = memoryArg;
return result;
}
}
