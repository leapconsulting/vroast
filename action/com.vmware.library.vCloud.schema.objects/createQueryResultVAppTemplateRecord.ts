/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVAppTemplateRecord(catalogNameArg?: string, creationDateArg?: any, isBusyArg?: boolean, isDeployedArg?: boolean, isEnabledArg?: boolean, isExpiredArg?: boolean, isGoldMasterArg?: boolean, isPublishedArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerNameArg?: string, statusArg?: string, storageProfileNameArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVAppTemplateRecord();
result["org"] = orgArg;
result["creationDate"] = creationDateArg;
result["metadata"] = metadataArg;
result["storageProfileName"] = storageProfileNameArg;
result["isEnabled"] = isEnabledArg;
result["isBusy"] = isBusyArg;
result["isGoldMaster"] = isGoldMasterArg;
result["isExpired"] = isExpiredArg;
result["ownerName"] = ownerNameArg;
result["vdcName"] = vdcNameArg;
result["catalogName"] = catalogNameArg;
result["isDeployed"] = isDeployedArg;
result["vdc"] = vdcArg;
result["isPublished"] = isPublishedArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
