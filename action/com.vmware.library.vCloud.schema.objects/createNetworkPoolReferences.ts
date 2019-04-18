/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkPoolReferences(networkPoolReferenceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkPoolReferences();
var items = result["networkPoolReference"];
for (var obj of networkPoolReferenceArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
