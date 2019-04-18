/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createUsersList(userReferenceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclUsersList();
var items = result["userReference"];
for (var obj of userReferenceArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
