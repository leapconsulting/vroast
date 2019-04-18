/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyFileDescriptor(targetEntityArg?: any, descriptionArg?: string, fileArg?: any, operationKeyArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (fileArg != null) {
	if (fileArg instanceof VclReference) {
	    targetEntityArg["file"] = fileArg;
	} else {
	    targetEntityArg["file"] = fileArg.getReference();
	}
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
