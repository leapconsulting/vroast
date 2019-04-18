/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWNetworkPoolReferences(networkPoolReferenceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWNetworkPoolReferences();
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
