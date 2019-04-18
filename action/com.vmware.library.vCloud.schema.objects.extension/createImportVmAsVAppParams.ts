/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createImportVmAsVAppParams(computerNameArg?: string, deployArg?: boolean, descriptionArg?: string, instantiationParamsArg?: any, nameArg?: string, powerOnArg?: boolean, sourceMoveArg?: boolean, vAppParentArg?: any, vAppScopedLocalIdArg?: string, vdcArg?: any, vdcStorageProfileArg?: any, vmMoRefArg?: string, vmNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclImportVmAsVAppParams();
result["vmMoRef"] = vmMoRefArg;
result["vAppScopedLocalId"] = vAppScopedLocalIdArg;
if ((vAppParentArg == null) || (vAppParentArg instanceof VclReference)) {
	result["vAppParent"] = vAppParentArg;
} else {
	result["vAppParent"] = vAppParentArg.getReference();
}
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
result["instantiationParams"] = instantiationParamsArg;
result["deploy"] = deployArg;
result["powerOn"] = powerOnArg;
result["vmName"] = vmNameArg;
result["computerName"] = computerNameArg;
result["sourceMove"] = sourceMoveArg;
if ((vdcArg == null) || (vdcArg instanceof VclReference)) {
	result["vdc"] = vdcArg;
} else {
	result["vdc"] = vdcArg.getReference();
}
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
