/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyAdminService(targetEntityArg?: vCloud.AdminService, apiDefinitionsArg?: any, apiFiltersArg?: any, authorizationEnabledArg?: boolean, descriptionArg?: string, enabledArg?: boolean, exchangeArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, priorityArg?: number, resourceClassesArg?: any, routingKeyArg?: string, serviceLinksArg?: any, vendorArg?: string): vCloud.AdminService {// WARNING: Auto generated code. Please, do not edit this code.
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (authorizationEnabledArg != null) {
	targetEntityArg["authorizationEnabled"] = authorizationEnabledArg;
}
if (exchangeArg != null) {
	targetEntityArg["exchange"] = exchangeArg;
}
if (vendorArg != null) {
	targetEntityArg["vendor"] = vendorArg;
}
if (routingKeyArg != null) {
	targetEntityArg["routingKey"] = routingKeyArg;
}
if (apiFiltersArg != null) {
	targetEntityArg["apiFilters"] = apiFiltersArg;
}
if (serviceLinksArg != null) {
	targetEntityArg["serviceLinks"] = serviceLinksArg;
}
if (apiDefinitionsArg != null) {
	targetEntityArg["apiDefinitions"] = apiDefinitionsArg;
}
if (resourceClassesArg != null) {
	targetEntityArg["resourceClasses"] = resourceClassesArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (priorityArg != null) {
	targetEntityArg["priority"] = priorityArg;
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
