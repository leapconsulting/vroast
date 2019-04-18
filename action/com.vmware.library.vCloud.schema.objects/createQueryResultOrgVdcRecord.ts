/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultOrgVdcRecord(cpuAllocationMhzArg?: number, cpuLimitMhzArg?: number, cpuUsedMhzArg?: number, isBusyArg?: boolean, isEnabledArg?: boolean, isSystemVdcArg?: boolean, memoryAllocationMBArg?: number, memoryLimitMBArg?: number, memoryUsedMBArg?: number, metadataArg?: any, nameArg?: string, numberOfDatastoresArg?: number, numberOfDisksArg?: number, numberOfMediaArg?: number, numberOfStorageProfilesArg?: number, numberOfVAppTemplatesArg?: number, numberOfVAppsArg?: number, orgNameArg?: string, providerVdcArg?: string, providerVdcNameArg?: string, statusArg?: string, storageAllocationMBArg?: number, storageLimitMBArg?: number, storageUsedMBArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultOrgVdcRecord();
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["storageUsedMB"] = storageUsedMBArg;
result["cpuAllocationMhz"] = cpuAllocationMhzArg;
result["cpuLimitMhz"] = cpuLimitMhzArg;
result["cpuUsedMhz"] = cpuUsedMhzArg;
result["isBusy"] = isBusyArg;
result["memoryAllocationMB"] = memoryAllocationMBArg;
result["memoryLimitMB"] = memoryLimitMBArg;
result["memoryUsedMB"] = memoryUsedMBArg;
result["numberOfDatastores"] = numberOfDatastoresArg;
result["numberOfStorageProfiles"] = numberOfStorageProfilesArg;
result["storageAllocationMB"] = storageAllocationMBArg;
result["storageLimitMB"] = storageLimitMBArg;
result["orgName"] = orgNameArg;
result["numberOfDisks"] = numberOfDisksArg;
result["numberOfVApps"] = numberOfVAppsArg;
result["isSystemVdc"] = isSystemVdcArg;
result["numberOfMedia"] = numberOfMediaArg;
result["numberOfVAppTemplates"] = numberOfVAppTemplatesArg;
result["providerVdc"] = providerVdcArg;
result["providerVdcName"] = providerVdcNameArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
