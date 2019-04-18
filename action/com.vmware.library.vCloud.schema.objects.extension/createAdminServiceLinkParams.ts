/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAdminServiceLinkParams(linkHrefArg?: string, mimeTypeArg?: string, operationKeyArg?: string, relArg?: string, resourceIdArg?: string, resourceTypeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminServiceLinkParams();
result["resourceId"] = resourceIdArg;
result["rel"] = relArg;
result["resourceType"] = resourceTypeArg;
result["linkHref"] = linkHrefArg;
result["operationKey"] = operationKeyArg;
result["mimeType"] = mimeTypeArg;
return result;
}
}
