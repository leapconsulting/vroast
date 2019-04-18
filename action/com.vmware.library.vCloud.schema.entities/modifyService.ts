/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyService(targetEntityArg?: vCloud.Service, descriptionArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, vendorArg?: string): vCloud.Service {// WARNING: Auto generated code. Please, do not edit this code.
if (vendorArg != null) {
	targetEntityArg["vendor"] = vendorArg;
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
if (namespaceArg != null) {
	targetEntityArg["namespace"] = namespaceArg;
}
return targetEntityArg;
}
}
