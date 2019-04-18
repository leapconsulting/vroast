/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createUpdateVdcStorageProfiles(addStorageProfileArg?: Array<any>, descriptionArg?: string, nameArg?: string, removeStorageProfileArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclUpdateVdcStorageProfiles();
var items = result["addStorageProfile"];
for (var obj of addStorageProfileArg) {
	items.add(obj);
}
var items = result["removeStorageProfile"];
for (var obj of removeStorageProfileArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
