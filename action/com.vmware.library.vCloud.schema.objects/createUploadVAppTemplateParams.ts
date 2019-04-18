/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createUploadVAppTemplateParams(descriptionArg?: string, manifestRequiredArg?: boolean, nameArg?: string, sourceHrefArg?: string, transferFormatArg?: string, vdcStorageProfileArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclUploadVAppTemplateParams();
result["sourceHref"] = sourceHrefArg;
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
result["manifestRequired"] = manifestRequiredArg;
result["transferFormat"] = transferFormatArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
