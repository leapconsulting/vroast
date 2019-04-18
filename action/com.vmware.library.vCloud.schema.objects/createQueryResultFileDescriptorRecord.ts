/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultFileDescriptorRecord(apiDefinitionArg?: string, apiNameArg?: string, apiNamespaceArg?: string, apiVendorArg?: string, fileMimeTypeArg?: string, fileUrlArg?: string, metadataArg?: any, nameArg?: string, serviceArg?: string, serviceNameArg?: string, serviceNamespaceArg?: string, serviceVendorArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultFileDescriptorRecord();
result["apiVendor"] = apiVendorArg;
result["apiDefinition"] = apiDefinitionArg;
result["metadata"] = metadataArg;
result["service"] = serviceArg;
result["serviceName"] = serviceNameArg;
result["serviceVendor"] = serviceVendorArg;
result["apiName"] = apiNameArg;
result["apiNamespace"] = apiNamespaceArg;
result["fileMimeType"] = fileMimeTypeArg;
result["fileUrl"] = fileUrlArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["name"] = nameArg;
return result;
}
}
