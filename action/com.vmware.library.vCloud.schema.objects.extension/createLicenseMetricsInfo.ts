/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLicenseMetricsInfo(availablePhysicalMemoryArg?: number, lastUpdateArg?: any, physicalMemoryUsedArg?: number, physicalSocketCountArg?: number, publishingToRemoteSitesArg?: boolean, runningVMsArg?: number, subscribingToRemoteSitesArg?: boolean, vCPUArg?: number, vRAMArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLicenseMetricsInfo();
result["vRAM"] = vRAMArg;
result["vCPU"] = vCPUArg;
result["runningVMs"] = runningVMsArg;
result["physicalMemoryUsed"] = physicalMemoryUsedArg;
result["physicalSocketCount"] = physicalSocketCountArg;
result["availablePhysicalMemory"] = availablePhysicalMemoryArg;
result["lastUpdate"] = lastUpdateArg;
result["publishingToRemoteSites"] = publishingToRemoteSitesArg;
result["subscribingToRemoteSites"] = subscribingToRemoteSitesArg;
return result;
}
}
