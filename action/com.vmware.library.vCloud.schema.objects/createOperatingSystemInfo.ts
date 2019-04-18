/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOperatingSystemInfo(cimOsIdArg?: number, cimVersionArg?: number, defaultHardDiskAdapterTypeArg?: any, internalNameArg?: string, maximumCpuCountArg?: number, minimumHardDiskSizeGigabytesArg?: number, minimumHardwareVersionArg?: number, minimumMemoryMegabytesArg?: number, nameArg?: string, operatingSystemIdArg?: number, personalizationAutoArg?: boolean, personalizationEnabledArg?: boolean, supportedArg?: boolean, supportedForCreateArg?: boolean, supportsMemHotAddArg?: boolean, sysprepPackagingSupportedArg?: boolean, x64Arg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOperatingSystemInfo();
result["operatingSystemId"] = operatingSystemIdArg;
result["defaultHardDiskAdapterType"] = defaultHardDiskAdapterTypeArg;
result["minimumHardDiskSizeGigabytes"] = minimumHardDiskSizeGigabytesArg;
result["minimumMemoryMegabytes"] = minimumMemoryMegabytesArg;
result["x64"] = x64Arg;
result["maximumCpuCount"] = maximumCpuCountArg;
result["minimumHardwareVersion"] = minimumHardwareVersionArg;
result["personalizationEnabled"] = personalizationEnabledArg;
result["personalizationAuto"] = personalizationAutoArg;
result["sysprepPackagingSupported"] = sysprepPackagingSupportedArg;
result["supportsMemHotAdd"] = supportsMemHotAddArg;
result["cimOsId"] = cimOsIdArg;
result["cimVersion"] = cimVersionArg;
result["supportedForCreate"] = supportedForCreateArg;
result["supported"] = supportedArg;
result["internalName"] = internalNameArg;
result["name"] = nameArg;
return result;
}
}
