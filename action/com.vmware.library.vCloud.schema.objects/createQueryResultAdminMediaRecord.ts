/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminMediaRecord(catalogArg?: string, catalogItemArg?: string, catalogNameArg?: string, creationDateArg?: any, isBusyArg?: boolean, isPublishedArg?: boolean, isVdcEnabledArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, storageBArg?: number, storageProfileNameArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminMediaRecord();
result["owner"] = ownerArg;
result["org"] = orgArg;
result["creationDate"] = creationDateArg;
result["metadata"] = metadataArg;
result["storageProfileName"] = storageProfileNameArg;
result["isBusy"] = isBusyArg;
result["ownerName"] = ownerNameArg;
result["vdcName"] = vdcNameArg;
result["catalogName"] = catalogNameArg;
result["isVdcEnabled"] = isVdcEnabledArg;
result["vdc"] = vdcArg;
result["catalog"] = catalogArg;
result["catalogItem"] = catalogItemArg;
result["isPublished"] = isPublishedArg;
result["storageB"] = storageBArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
