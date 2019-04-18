/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyOrg(targetEntityArg?: vCloud.Organization, descriptionArg?: string, fullNameArg?: string, isEnabledArg?: boolean, nameArg?: string, operationKeyArg?: string): vCloud.Organization {// WARNING: Auto generated code. Please, do not edit this code.
if (fullNameArg != null) {
	targetEntityArg["fullName"] = fullNameArg;
}
if (isEnabledArg != null) {
	targetEntityArg["isEnabled"] = isEnabledArg;
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
