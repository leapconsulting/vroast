/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createVirtualDiskDesc(capacityArg?: string, capacityAllocationUnitsArg?: string, diskIdArg?: string, fileRefArg?: string, formatArg?: string, parentRefArg?: string, populatedSizeArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVirtualDiskDesc();
result["format"] = formatArg;
result["capacity"] = capacityArg;
result["parentRef"] = parentRefArg;
result["diskId"] = diskIdArg;
result["capacityAllocationUnits"] = capacityAllocationUnitsArg;
result["populatedSize"] = populatedSizeArg;
result["fileRef"] = fileRefArg;
return result;
}
}
