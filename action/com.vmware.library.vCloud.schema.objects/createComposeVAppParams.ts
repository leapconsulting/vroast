/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createComposeVAppParams(allEULAsAcceptedArg?: boolean, deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourcedItemArg?: Array<any>, vAppParentArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclComposeVAppParams();
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
