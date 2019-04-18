/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultApiDefinitionRecord(apiVendorArg?: string, entryPointArg?: string, metadataArg?: any, nameArg?: string, namespaceArg?: string, serviceArg?: string, serviceNameArg?: string, serviceNamespaceArg?: string, serviceVendorArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultApiDefinitionRecord();
result["entryPoint"] = entryPointArg;
result["apiVendor"] = apiVendorArg;
result["metadata"] = metadataArg;
result["service"] = serviceArg;
result["serviceName"] = serviceNameArg;
result["serviceVendor"] = serviceVendorArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["name"] = nameArg;
result["namespace"] = namespaceArg;
return result;
}
}
