/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVAppRecord(creationDateArg?: any, isBusyArg?: boolean, isDeployedArg?: boolean, isEnabledArg?: boolean, isExpiredArg?: boolean, isInMaintenanceModeArg?: boolean, isPublicArg?: boolean, metadataArg?: any, nameArg?: string, ownerNameArg?: string, statusArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVAppRecord();
result["creationDate"] = creationDateArg;
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["isBusy"] = isBusyArg;
result["isPublic"] = isPublicArg;
result["isInMaintenanceMode"] = isInMaintenanceModeArg;
result["isExpired"] = isExpiredArg;
result["ownerName"] = ownerNameArg;
result["vdcName"] = vdcNameArg;
result["isDeployed"] = isDeployedArg;
result["vdc"] = vdcArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
