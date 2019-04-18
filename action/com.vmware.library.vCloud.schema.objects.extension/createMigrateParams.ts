/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createMigrateParams(resourcePoolRefArg?: any, vmRefArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclMigrateParams();
var items = result["vmRef"];
for (var obj of vmRefArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
result["resourcePoolRef"] = resourcePoolRefArg;
return result;
}
}
