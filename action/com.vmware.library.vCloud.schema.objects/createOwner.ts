/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOwner(userArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOwner();
if ((userArg == null) || (userArg instanceof VclReference)) {
	result["user"] = userArg;
} else {
	result["user"] = userArg.getReference();
}
return result;
}
}
