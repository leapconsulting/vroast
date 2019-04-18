/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultOrgVdcStorageProfileRecord(isDefaultStorageProfileArg?: boolean, isEnabledArg?: boolean, isVdcBusyArg?: boolean, metadataArg?: any, nameArg?: string, numberOfConditionsArg?: number, storageLimitMBArg?: number, storageUsedMBArg?: number, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultOrgVdcStorageProfileRecord();
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["storageUsedMB"] = storageUsedMBArg;
result["storageLimitMB"] = storageLimitMBArg;
result["vdcName"] = vdcNameArg;
result["vdc"] = vdcArg;
result["isDefaultStorageProfile"] = isDefaultStorageProfileArg;
result["isVdcBusy"] = isVdcBusyArg;
result["numberOfConditions"] = numberOfConditionsArg;
result["name"] = nameArg;
return result;
}
}
