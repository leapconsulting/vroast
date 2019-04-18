/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLicensingVirtualMachine(cpuArg?: number, memoryArg?: number, vimObjectRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLicensingVirtualMachine();
result["vimObjectRef"] = vimObjectRefArg;
result["cpu"] = cpuArg;
result["memory"] = memoryArg;
return result;
}
}
