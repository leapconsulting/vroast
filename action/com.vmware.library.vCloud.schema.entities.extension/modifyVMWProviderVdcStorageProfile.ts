/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyVMWProviderVdcStorageProfile(targetEntityArg?: vCloud.VmwProviderVdcStorageProfile, capacityTotalArg?: number, capacityUsedArg?: number, descriptionArg?: string, enabledArg?: boolean, nameArg?: string, operationKeyArg?: string, unitsArg?: string, vimStorageProfileArg?: any): vCloud.VmwProviderVdcStorageProfile {// WARNING: Auto generated code. Please, do not edit this code.
if (capacityTotalArg != null) {
	targetEntityArg["capacityTotal"] = capacityTotalArg;
}
if (capacityUsedArg != null) {
	targetEntityArg["capacityUsed"] = capacityUsedArg;
}
if (vimStorageProfileArg != null) {
	targetEntityArg["vimStorageProfile"] = vimStorageProfileArg;
}
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (unitsArg != null) {
	targetEntityArg["units"] = unitsArg;
}
return targetEntityArg;
}
}
