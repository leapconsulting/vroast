/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createMediaInsertOrEjectParams(mediaArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclMediaInsertOrEjectParams();
if ((mediaArg == null) || (mediaArg instanceof VclReference)) {
	result["media"] = mediaArg;
} else {
	result["media"] = mediaArg.getReference();
}
return result;
}
}
