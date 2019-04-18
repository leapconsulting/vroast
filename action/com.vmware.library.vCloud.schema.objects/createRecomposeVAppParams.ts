/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRecomposeVAppParams(allEULAsAcceptedArg?: boolean, createItemArg?: Array<any>, deleteItemArg?: Array<any>, deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourcedItemArg?: Array<any>, vAppParentArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRecomposeVAppParams();
var items = result["deleteItem"];
for (var obj of deleteItemArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
var items = result["createItem"];
for (var obj of createItemArg) {
	items.add(obj);
}
if ((vAppParentArg == null) || (vAppParentArg instanceof VclReference)) {
	result["vAppParent"] = vAppParentArg;
} else {
	result["vAppParent"] = vAppParentArg.getReference();
}
result["allEULAsAccepted"] = allEULAsAcceptedArg;
result["instantiationParams"] = instantiationParamsArg;
result["deploy"] = deployArg;
result["powerOn"] = powerOnArg;
result["linkedClone"] = linkedCloneArg;
var items = result["sourcedItem"];
for (var obj of sourcedItemArg) {
	items.add(obj);
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
