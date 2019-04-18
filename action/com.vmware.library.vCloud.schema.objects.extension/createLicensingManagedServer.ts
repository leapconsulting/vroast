/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLicensingManagedServer(cpuArg?: number, memoryInstalledArg?: number, vimObjectRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLicensingManagedServer();
result["vimObjectRef"] = vimObjectRefArg;
result["memoryInstalled"] = memoryInstalledArg;
result["cpu"] = cpuArg;
return result;
}
}
