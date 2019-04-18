/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createImportVmIntoExistingVAppParams(computerNameArg?: string, sourceMoveArg?: boolean, vAppArg?: any, vAppScopedLocalIdArg?: string, vdcStorageProfileArg?: any, vmDescriptionArg?: string, vmMoRefArg?: string, vmNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclImportVmIntoExistingVAppParams();
result["vmMoRef"] = vmMoRefArg;
result["vAppScopedLocalId"] = vAppScopedLocalIdArg;
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
result["vmName"] = vmNameArg;
result["vmDescription"] = vmDescriptionArg;
result["computerName"] = computerNameArg;
if ((vAppArg == null) || (vAppArg instanceof VclReference)) {
	result["vApp"] = vAppArg;
} else {
	result["vApp"] = vAppArg.getReference();
}
result["sourceMove"] = sourceMoveArg;
return result;
}
}
