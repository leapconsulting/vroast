/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRelocateParams(datastoreArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRelocateParams();
if ((datastoreArg == null) || (datastoreArg instanceof VclReference)) {
	result["datastore"] = datastoreArg;
} else {
	result["datastore"] = datastoreArg.getReference();
}
return result;
}
}
