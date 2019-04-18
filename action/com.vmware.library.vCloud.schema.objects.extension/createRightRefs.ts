/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createRightRefs(rightArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRightRefs();
var items = result["right"];
for (var obj of rightArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
