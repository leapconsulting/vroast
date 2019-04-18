/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCreateSnapshotParams(descriptionArg?: string, memoryArg?: boolean, nameArg?: string, quiesceArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCreateSnapshotParams();
result["memory"] = memoryArg;
result["quiesce"] = quiesceArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
