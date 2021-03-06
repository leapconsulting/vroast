/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyApiDefinition(targetEntityArg?: vCloud.ApiDefinition, apiVendorArg?: string, descriptionArg?: string, entryPointArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, supportedApiVersionsArg?: any): vCloud.ApiDefinition {// WARNING: Auto generated code. Please, do not edit this code.
if (supportedApiVersionsArg != null) {
	targetEntityArg["supportedApiVersions"] = supportedApiVersionsArg;
}
if (entryPointArg != null) {
	targetEntityArg["entryPoint"] = entryPointArg;
}
if (apiVendorArg != null) {
	targetEntityArg["apiVendor"] = apiVendorArg;
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
