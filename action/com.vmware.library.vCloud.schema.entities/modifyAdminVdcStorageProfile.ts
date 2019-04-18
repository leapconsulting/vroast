/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyAdminVdcStorageProfile(targetEntityArg?: vCloud.AdminVdcStorageProfile, defaultArg?: boolean, descriptionArg?: string, enabledArg?: boolean, limitArg?: number, nameArg?: string, operationKeyArg?: string, providerVdcStorageProfileArg?: any, unitsArg?: string): vCloud.AdminVdcStorageProfile {// WARNING: Auto generated code. Please, do not edit this code.
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (limitArg != null) {
	targetEntityArg["limit"] = limitArg;
}
if (providerVdcStorageProfileArg != null) {
	if (providerVdcStorageProfileArg instanceof VclReference) {
	    targetEntityArg["providerVdcStorageProfile"] = providerVdcStorageProfileArg;
	} else {
	    targetEntityArg["providerVdcStorageProfile"] = providerVdcStorageProfileArg.getReference();
	}
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (defaultArg != null) {
	targetEntityArg["default"] = defaultArg;
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
