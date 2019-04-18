/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDiskCreateParams(diskArg?: any, localityArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDiskCreateParams();
result["disk"] = diskArg;
if ((localityArg == null) || (localityArg instanceof VclReference)) {
	result["locality"] = localityArg;
} else {
	result["locality"] = localityArg.getReference();
}
return result;
}
}
