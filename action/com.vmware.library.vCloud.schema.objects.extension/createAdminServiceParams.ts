/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAdminServiceParams(apiDefinitionsArg?: any, apiFiltersArg?: any, authorizationEnabledArg?: boolean, descriptionArg?: string, enabledArg?: boolean, exchangeArg?: string, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, priorityArg?: number, resourceClassesArg?: any, routingKeyArg?: string, serviceLinksArg?: any, vendorArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminServiceParams();
result["enabled"] = enabledArg;
result["authorizationEnabled"] = authorizationEnabledArg;
result["exchange"] = exchangeArg;
result["vendor"] = vendorArg;
result["routingKey"] = routingKeyArg;
result["apiFilters"] = apiFiltersArg;
result["serviceLinks"] = serviceLinksArg;
result["apiDefinitions"] = apiDefinitionsArg;
result["resourceClasses"] = resourceClassesArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["priority"] = priorityArg;
result["description"] = descriptionArg;
result["namespace"] = namespaceArg;
return result;
}
}
