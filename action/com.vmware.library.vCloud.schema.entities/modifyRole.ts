/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyRole(targetEntityArg?: vCloud.Role, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, rightReferencesArg?: any): vCloud.Role {// WARNING: Auto generated code. Please, do not edit this code.
if (rightReferencesArg != null) {
	targetEntityArg["rightReferences"] = rightReferencesArg;
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
return targetEntityArg;
}
}
