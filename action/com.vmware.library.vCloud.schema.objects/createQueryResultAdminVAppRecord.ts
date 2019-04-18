/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminVAppRecord(cpuAllocationMhzArg?: number, creationDateArg?: any, isBusyArg?: boolean, isDeployedArg?: boolean, isEnabledArg?: boolean, isExpiredArg?: boolean, isInMaintenanceModeArg?: boolean, isVdcEnabledArg?: boolean, memoryAllocationMBArg?: number, metadataArg?: any, nameArg?: string, numberOfVMsArg?: number, orgArg?: string, ownerNameArg?: string, statusArg?: string, storageKBArg?: number, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminVAppRecord();
result["org"] = orgArg;
result["creationDate"] = creationDateArg;
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["cpuAllocationMhz"] = cpuAllocationMhzArg;
result["isBusy"] = isBusyArg;
result["memoryAllocationMB"] = memoryAllocationMBArg;
result["storageKB"] = storageKBArg;
result["isInMaintenanceMode"] = isInMaintenanceModeArg;
result["numberOfVMs"] = numberOfVMsArg;
result["isExpired"] = isExpiredArg;
result["ownerName"] = ownerNameArg;
result["vdcName"] = vdcNameArg;
result["isVdcEnabled"] = isVdcEnabledArg;
result["isDeployed"] = isDeployedArg;
result["vdc"] = vdcArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
