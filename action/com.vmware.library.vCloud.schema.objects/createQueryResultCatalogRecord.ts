/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultCatalogRecord(creationDateArg?: any, isPublishedArg?: boolean, isSharedArg?: boolean, metadataArg?: any, nameArg?: string, numberOfMediaArg?: number, numberOfVAppTemplatesArg?: number, orgNameArg?: string, ownerArg?: string, ownerNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultCatalogRecord();
result["owner"] = ownerArg;
result["creationDate"] = creationDateArg;
result["isShared"] = isSharedArg;
result["metadata"] = metadataArg;
result["orgName"] = orgNameArg;
result["numberOfMedia"] = numberOfMediaArg;
result["numberOfVAppTemplates"] = numberOfVAppTemplatesArg;
result["ownerName"] = ownerNameArg;
result["isPublished"] = isPublishedArg;
result["name"] = nameArg;
return result;
}
}
