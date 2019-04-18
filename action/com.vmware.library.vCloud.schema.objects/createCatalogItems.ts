/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCatalogItems(catalogItemArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCatalogItems();
var items = result["catalogItem"];
for (var obj of catalogItemArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
return result;
}
}
