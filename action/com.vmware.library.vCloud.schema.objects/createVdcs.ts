/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVdcs(vdcArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVdcs();
var items = result["vdc"];
for (var obj of vdcArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
