/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCloneVAppTemplateParams(descriptionArg?: string, isSourceDeleteArg?: boolean, nameArg?: string, sourceArg?: any, vdcStorageProfileArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCloneVAppTemplateParams();
if ((sourceArg == null) || (sourceArg instanceof VclReference)) {
	result["source"] = sourceArg;
} else {
	result["source"] = sourceArg.getReference();
}
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
result["isSourceDelete"] = isSourceDeleteArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
