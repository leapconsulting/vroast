/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminCatalogRecord(creationDateArg?: any, isPublishedArg?: boolean, isSharedArg?: boolean, metadataArg?: any, nameArg?: string, numberOfMediaArg?: number, numberOfTemplatesArg?: number, orgArg?: string, orgNameArg?: string, ownerArg?: string, ownerNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminCatalogRecord();
result["owner"] = ownerArg;
result["org"] = orgArg;
result["creationDate"] = creationDateArg;
result["numberOfTemplates"] = numberOfTemplatesArg;
result["isShared"] = isSharedArg;
result["metadata"] = metadataArg;
result["orgName"] = orgNameArg;
result["numberOfMedia"] = numberOfMediaArg;
result["ownerName"] = ownerNameArg;
result["isPublished"] = isPublishedArg;
result["name"] = nameArg;
return result;
}
}
