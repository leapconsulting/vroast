/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultServiceLinkRecord(linkHrefArg?: string, metadataArg?: any, mimeTypeArg?: string, relArg?: string, resourceIdArg?: string, resourceTypeArg?: string, serviceArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultServiceLinkRecord();
result["resourceId"] = resourceIdArg;
result["rel"] = relArg;
result["resourceType"] = resourceTypeArg;
result["linkHref"] = linkHrefArg;
result["metadata"] = metadataArg;
result["service"] = serviceArg;
result["mimeType"] = mimeTypeArg;
return result;
}
}
