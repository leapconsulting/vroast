/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworks(networkArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworks();
var items = result["network"];
for (var obj of networkArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
