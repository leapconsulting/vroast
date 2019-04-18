/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCaptureVAppParams(descriptionArg?: string, nameArg?: string, sectionArg?: Array<any>, sourceArg?: any, targetCatalogItemArg?: any, vdcStorageProfileArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCaptureVAppParams();
if ((sourceArg == null) || (sourceArg instanceof VclReference)) {
	result["source"] = sourceArg;
} else {
	result["source"] = sourceArg.getReference();
}
if ((targetCatalogItemArg == null) || (targetCatalogItemArg instanceof VclReference)) {
	result["targetCatalogItem"] = targetCatalogItemArg;
} else {
	result["targetCatalogItem"] = targetCatalogItemArg.getReference();
}
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
var items = result["section"];
for (var obj of sectionArg) {
	items.add(obj);
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
