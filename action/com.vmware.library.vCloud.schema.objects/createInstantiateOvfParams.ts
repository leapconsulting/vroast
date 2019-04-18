/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createInstantiateOvfParams(allEULAsAcceptedArg?: boolean, deployArg?: boolean, descriptionArg?: string, instantiateOvfPropertyArg?: Array<any>, instantiateVmParamsArg?: Array<any>, instantiationParamsArg?: any, nameArg?: string, networkMappingArg?: Array<any>, powerOnArg?: boolean, transferFormatArg?: string, vAppParentArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclInstantiateOvfParams();
if ((vAppParentArg == null) || (vAppParentArg instanceof VclReference)) {
	result["vAppParent"] = vAppParentArg;
} else {
	result["vAppParent"] = vAppParentArg.getReference();
}
result["allEULAsAccepted"] = allEULAsAcceptedArg;
result["instantiationParams"] = instantiationParamsArg;
result["deploy"] = deployArg;
result["powerOn"] = powerOnArg;
var items = result["networkMapping"];
for (var obj of networkMappingArg) {
	items.add(obj);
}
var items = result["instantiateOvfProperty"];
for (var obj of instantiateOvfPropertyArg) {
	items.add(obj);
}
var items = result["instantiateVmParams"];
for (var obj of instantiateVmParamsArg) {
	items.add(obj);
}
result["transferFormat"] = transferFormatArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
