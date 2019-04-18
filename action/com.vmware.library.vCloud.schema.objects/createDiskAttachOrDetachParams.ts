/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDiskAttachOrDetachParams(busNumberArg?: number, diskArg?: any, unitNumberArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDiskAttachOrDetachParams();
if ((diskArg == null) || (diskArg instanceof VclReference)) {
	result["disk"] = diskArg;
} else {
	result["disk"] = diskArg.getReference();
}
result["busNumber"] = busNumberArg;
result["unitNumber"] = unitNumberArg;
return result;
}
}
