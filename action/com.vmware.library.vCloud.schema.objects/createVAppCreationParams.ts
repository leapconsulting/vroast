/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVAppCreationParams(deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, nameArg?: string, powerOnArg?: boolean, vAppParentArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVAppCreationParams();
if ((vAppParentArg == null) || (vAppParentArg instanceof VclReference)) {
	result["vAppParent"] = vAppParentArg;
} else {
	result["vAppParent"] = vAppParentArg.getReference();
}
result["instantiationParams"] = instantiationParamsArg;
result["deploy"] = deployArg;
result["powerOn"] = powerOnArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
