/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createApiFilterParams(operationKeyArg?: string, responseContentTypeArg?: string, urlPatternArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclApiFilterParams();
result["urlPattern"] = urlPatternArg;
result["responseContentType"] = responseContentTypeArg;
result["operationKey"] = operationKeyArg;
return result;
}
}
