/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createInstantiateVmParams(computerNameArg?: string, hardwareCustomizationArg?: any, networkConnectionSectionArg?: any, vdcStorageProfileArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclInstantiateVmParams();
if ((vdcStorageProfileArg == null) || (vdcStorageProfileArg instanceof VclReference)) {
	result["vdcStorageProfile"] = vdcStorageProfileArg;
} else {
	result["vdcStorageProfile"] = vdcStorageProfileArg.getReference();
}
result["computerName"] = computerNameArg;
result["networkConnectionSection"] = networkConnectionSectionArg;
result["hardwareCustomization"] = hardwareCustomizationArg;
return result;
}
}
