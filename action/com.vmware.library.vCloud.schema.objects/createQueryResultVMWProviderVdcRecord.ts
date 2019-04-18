/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVMWProviderVdcRecord(cpuAllocationMhzArg?: number, cpuLimitMhzArg?: number, cpuUsedMhzArg?: number, isBusyArg?: boolean, isDeletedArg?: boolean, isEnabledArg?: boolean, memoryAllocationMBArg?: number, memoryLimitMBArg?: number, memoryUsedMBArg?: number, metadataArg?: any, nameArg?: string, numberOfDatastoresArg?: number, numberOfStorageProfilesArg?: number, numberOfVdcsArg?: number, statusArg?: string, storageAllocationMBArg?: number, storageLimitMBArg?: number, storageUsedMBArg?: number, vcpuRatingMhzArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVMWProviderVdcRecord();
result["vcpuRatingMhz"] = vcpuRatingMhzArg;
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
result["isDeleted"] = isDeletedArg;
result["numberOfVdcs"] = numberOfVdcsArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
