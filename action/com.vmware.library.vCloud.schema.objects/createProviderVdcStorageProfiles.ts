/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createProviderVdcStorageProfiles(providerVdcStorageProfileArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProviderVdcStorageProfiles();
var items = result["providerVdcStorageProfile"];
for (var obj of providerVdcStorageProfileArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
