/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createProviderVdcReferences(providerVdcReferenceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProviderVdcReferences();
var items = result["providerVdcReference"];
for (var obj of providerVdcReferenceArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
