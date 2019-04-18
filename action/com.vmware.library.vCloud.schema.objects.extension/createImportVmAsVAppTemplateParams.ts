/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createImportVmAsVAppTemplateParams(catalogArg?: any, computerNameArg?: string, descriptionArg?: string, goldMasterArg?: boolean, nameArg?: string, sourceMoveArg?: boolean, vAppScopedLocalIdArg?: string, vdcArg?: any, vdcStorageProfileArg?: any, vmMoRefArg?: string, vmNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclImportVmAsVAppTemplateParams();
result["vmMoRef"] = vmMoRefArg;
result["vAppScopedLocalId"] = vAppScopedLocalIdArg;
result["goldMaster"] = goldMasterArg;
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
result["vmName"] = vmNameArg;
result["computerName"] = computerNameArg;
result["sourceMove"] = sourceMoveArg;
if ((vdcArg == null) || (vdcArg instanceof VclReference)) {
	result["vdc"] = vdcArg;
} else {
	result["vdc"] = vdcArg.getReference();
}
if ((catalogArg == null) || (catalogArg instanceof VclReference)) {
	result["catalog"] = catalogArg;
} else {
	result["catalog"] = catalogArg.getReference();
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
