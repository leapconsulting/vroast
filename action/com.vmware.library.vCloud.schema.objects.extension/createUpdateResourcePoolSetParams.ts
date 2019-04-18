/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createUpdateResourcePoolSetParams(addItemArg?: Array<any>, deleteItemArg?: Array<any>, descriptionArg?: string, nameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclUpdateResourcePoolSetParams();
var items = result["deleteItem"];
for (var obj of deleteItemArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
var items = result["addItem"];
for (var obj of addItemArg) {
	items.add(obj);
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
