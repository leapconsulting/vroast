/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVdcReferences(vdcReferenceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVdcReferences();
var items = result["vdcReference"];
for (var obj of vdcReferenceArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
