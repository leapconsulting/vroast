/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createProviderVdcCapacity(allocationArg?: number, overheadArg?: number, reservedArg?: number, totalArg?: number, unitsArg?: string, usedArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProviderVdcCapacity();
result["total"] = totalArg;
result["allocation"] = allocationArg;
result["overhead"] = overheadArg;
result["used"] = usedArg;
result["reserved"] = reservedArg;
result["units"] = unitsArg;
return result;
}
}
