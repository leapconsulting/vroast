/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyVdcStorageProfile(targetEntityArg?: vCloud.VdcStorageProfile, defaultArg?: boolean, descriptionArg?: string, enabledArg?: boolean, limitArg?: number, nameArg?: string, operationKeyArg?: string, unitsArg?: string): vCloud.VdcStorageProfile {// WARNING: Auto generated code. Please, do not edit this code.
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (limitArg != null) {
	targetEntityArg["limit"] = limitArg;
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
