/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createDisk(instanceIdArg?: string, sizeArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDisk();
result["instanceId"] = instanceIdArg;
result["size"] = sizeArg;
return result;
}
}
