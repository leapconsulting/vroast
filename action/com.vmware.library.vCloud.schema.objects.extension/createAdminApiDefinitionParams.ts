/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAdminApiDefinitionParams(apiVendorArg?: string, descriptionArg?: string, entryPointArg?: string, filesArg?: any, nameArg?: string, namespaceArg?: string, operationKeyArg?: string, supportedApiVersionsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminApiDefinitionParams();
result["supportedApiVersions"] = supportedApiVersionsArg;
result["entryPoint"] = entryPointArg;
result["apiVendor"] = apiVendorArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["namespace"] = namespaceArg;
result["files"] = filesArg;
return result;
}
}
