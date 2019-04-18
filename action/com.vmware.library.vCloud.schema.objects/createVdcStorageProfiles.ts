/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVdcStorageProfiles(vdcStorageProfileArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVdcStorageProfiles();
var items = result["vdcStorageProfile"];
for (var obj of vdcStorageProfileArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
