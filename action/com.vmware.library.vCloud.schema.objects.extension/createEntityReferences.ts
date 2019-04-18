/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createEntityReferences(referenceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEntityReferences();
var items = result["reference"];
for (var obj of referenceArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
