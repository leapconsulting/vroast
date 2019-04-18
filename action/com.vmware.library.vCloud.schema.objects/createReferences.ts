/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createReferences(nameArg?: string, pageArg?: number, pageSizeArg?: number, referenceArg?: Array<any>, totalArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclReferences();
result["total"] = totalArg;
result["page"] = pageArg;
result["pageSize"] = pageSizeArg;
result["name"] = nameArg;
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
