/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultProviderVdcResourcePoolRelationRecord(cpuReservationAllocationMhzArg?: number, cpuReservationLimitMhzArg?: number, isEnabledArg?: boolean, isPrimaryArg?: boolean, memoryReservationAllocationMBArg?: number, memoryReservationLimitMBArg?: number, metadataArg?: any, nameArg?: string, numberOfVMsArg?: number, providerVdcArg?: string, resourcePoolMorefArg?: string, vcArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultProviderVdcResourcePoolRelationRecord();
result["metadata"] = metadataArg;
result["resourcePoolMoref"] = resourcePoolMorefArg;
result["isEnabled"] = isEnabledArg;
result["providerVdc"] = providerVdcArg;
result["vc"] = vcArg;
result["vcName"] = vcNameArg;
result["numberOfVMs"] = numberOfVMsArg;
result["isPrimary"] = isPrimaryArg;
result["cpuReservationAllocationMhz"] = cpuReservationAllocationMhzArg;
result["cpuReservationLimitMhz"] = cpuReservationLimitMhzArg;
result["memoryReservationAllocationMB"] = memoryReservationAllocationMBArg;
result["memoryReservationLimitMB"] = memoryReservationLimitMBArg;
result["name"] = nameArg;
return result;
}
}
