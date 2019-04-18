/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createInstantiateVAppParams(deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, isSourceDeleteArg?: boolean, linkedCloneArg?: boolean, nameArg?: string, powerOnArg?: boolean, sourceArg?: any, sourcedVmInstantiationParamsArg?: Array<any>, vAppParentArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclInstantiateVAppParams();
if ((sourceArg == null) || (sourceArg instanceof VclReference)) {
	result["source"] = sourceArg;
} else {
	result["source"] = sourceArg.getReference();
}
if ((vAppParentArg == null) || (vAppParentArg instanceof VclReference)) {
	result["vAppParent"] = vAppParentArg;
} else {
	result["vAppParent"] = vAppParentArg.getReference();
}
result["instantiationParams"] = instantiationParamsArg;
result["deploy"] = deployArg;
result["powerOn"] = powerOnArg;
result["linkedClone"] = linkedCloneArg;
var items = result["sourcedVmInstantiationParams"];
for (var obj of sourcedVmInstantiationParamsArg) {
	items.add(obj);
}
result["isSourceDelete"] = isSourceDeleteArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
