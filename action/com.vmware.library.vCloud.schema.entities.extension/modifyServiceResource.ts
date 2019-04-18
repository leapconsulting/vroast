/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyServiceResource(targetEntityArg?: vCloud.AdminServiceResource, descriptionArg?: string, externalObjectIdArg?: string, nameArg?: string, operationKeyArg?: string, orgArg?: any): vCloud.AdminServiceResource {// WARNING: Auto generated code. Please, do not edit this code.
if (orgArg != null) {
	if (orgArg instanceof VclReference) {
	    targetEntityArg["org"] = orgArg;
	} else {
	    targetEntityArg["org"] = orgArg.getReference();
	}
}
if (externalObjectIdArg != null) {
	targetEntityArg["externalObjectId"] = externalObjectIdArg;
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
