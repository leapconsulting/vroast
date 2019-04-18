/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCapacityWithUsage(allocatedArg?: number, limitArg?: number, overheadArg?: number, reservedArg?: number, unitsArg?: string, usedArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCapacityWithUsage();
result["limit"] = limitArg;
result["allocated"] = allocatedArg;
result["overhead"] = overheadArg;
result["used"] = usedArg;
result["reserved"] = reservedArg;
result["units"] = unitsArg;
return result;
}
}
