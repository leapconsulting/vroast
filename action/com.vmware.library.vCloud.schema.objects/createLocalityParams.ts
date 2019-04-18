/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLocalityParams(resourceEntityArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLocalityParams();
var items = result["resourceEntity"];
for (var obj of resourceEntityArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
