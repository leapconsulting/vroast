/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgList(orgArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgList();
var items = result["org"];
for (var obj of orgArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
