/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCapacity(allocatedArg?: number, limitArg?: number, unitsArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCapacity();
result["limit"] = limitArg;
result["allocated"] = allocatedArg;
result["units"] = unitsArg;
return result;
}
}
