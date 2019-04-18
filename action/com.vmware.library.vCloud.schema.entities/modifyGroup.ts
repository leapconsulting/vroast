/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyGroup(targetEntityArg?: vCloud.Group, descriptionArg?: string, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, providerTypeArg?: string, roleArg?: any, usersListArg?: any): vCloud.Group {// WARNING: Auto generated code. Please, do not edit this code.
if (nameInSourceArg != null) {
	targetEntityArg["nameInSource"] = nameInSourceArg;
}
if (providerTypeArg != null) {
	targetEntityArg["providerType"] = providerTypeArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (usersListArg != null) {
	targetEntityArg["usersList"] = usersListArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (roleArg != null) {
	if (roleArg instanceof VclReference) {
	    targetEntityArg["role"] = roleArg;
	} else {
	    targetEntityArg["role"] = roleArg.getReference();
	}
}
return targetEntityArg;
}
}
