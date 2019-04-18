/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultCatalogItemRecord(catalogArg?: string, catalogNameArg?: string, creationDateArg?: any, entityArg?: string, entityNameArg?: string, entityTypeArg?: string, isExpiredArg?: boolean, isPublishedArg?: boolean, isVdcEnabledArg?: boolean, metadataArg?: any, nameArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultCatalogItemRecord();
result["owner"] = ownerArg;
result["entityType"] = entityTypeArg;
result["creationDate"] = creationDateArg;
result["metadata"] = metadataArg;
result["isExpired"] = isExpiredArg;
result["ownerName"] = ownerNameArg;
result["vdcName"] = vdcNameArg;
result["catalogName"] = catalogNameArg;
result["isVdcEnabled"] = isVdcEnabledArg;
result["vdc"] = vdcArg;
result["catalog"] = catalogArg;
result["entityName"] = entityNameArg;
result["isPublished"] = isPublishedArg;
result["name"] = nameArg;
result["status"] = statusArg;
result["entity"] = entityArg;
return result;
}
}
