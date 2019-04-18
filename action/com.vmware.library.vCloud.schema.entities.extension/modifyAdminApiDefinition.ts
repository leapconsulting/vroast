/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyAdminApiDefinition(targetEntityArg?: vCloud.AdminApiDefinition, apiVendorArg?: string, descriptionArg?: string, entryPointArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, supportedApiVersionsArg?: any): vCloud.AdminApiDefinition {// WARNING: Auto generated code. Please, do not edit this code.
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
