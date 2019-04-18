/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminOrgVdcStorageProfileRecord(isDefaultStorageProfileArg?: boolean, isEnabledArg?: boolean, metadataArg?: any, nameArg?: string, numberOfConditionsArg?: number, orgArg?: string, storageLimitMBArg?: number, storageProfileMorefArg?: string, storageUsedMBArg?: number, vcArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminOrgVdcStorageProfileRecord();
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["storageUsedMB"] = storageUsedMBArg;
result["storageLimitMB"] = storageLimitMBArg;
result["vc"] = vcArg;
result["vdcName"] = vdcNameArg;
result["vdc"] = vdcArg;
result["isDefaultStorageProfile"] = isDefaultStorageProfileArg;
result["numberOfConditions"] = numberOfConditionsArg;
result["storageProfileMoref"] = storageProfileMorefArg;
result["name"] = nameArg;
return result;
}
}
