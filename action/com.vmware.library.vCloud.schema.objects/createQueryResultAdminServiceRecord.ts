/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminServiceRecord(enabledArg?: boolean, exchangeArg?: string, isAuthorizationEnabledArg?: boolean, metadataArg?: any, nameArg?: string, namespaceArg?: string, priorityArg?: number, routingKeyArg?: string, vendorArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminServiceRecord();
result["enabled"] = enabledArg;
result["exchange"] = exchangeArg;
result["vendor"] = vendorArg;
result["routingKey"] = routingKeyArg;
result["metadata"] = metadataArg;
result["isAuthorizationEnabled"] = isAuthorizationEnabledArg;
result["name"] = nameArg;
result["priority"] = priorityArg;
result["namespace"] = namespaceArg;
return result;
}
}
