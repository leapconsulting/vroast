/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyRight(targetEntityArg?: vCloud.Right, bundleKeyArg?: string, categoryArg?: string, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, serviceNamespaceArg?: string): vCloud.Right {// WARNING: Auto generated code. Please, do not edit this code.
if (categoryArg != null) {
	targetEntityArg["category"] = categoryArg;
}
if (bundleKeyArg != null) {
	targetEntityArg["bundleKey"] = bundleKeyArg;
}
if (serviceNamespaceArg != null) {
	targetEntityArg["serviceNamespace"] = serviceNamespaceArg;
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
