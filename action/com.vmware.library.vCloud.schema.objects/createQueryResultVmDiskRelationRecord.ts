/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVmDiskRelationRecord(diskArg?: string, metadataArg?: any, vdcArg?: string, vmArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVmDiskRelationRecord();
result["metadata"] = metadataArg;
result["disk"] = diskArg;
result["vm"] = vmArg;
result["vdc"] = vdcArg;
return result;
}
}
