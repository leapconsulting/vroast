/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSnapshot(createdArg?: any, poweredOnArg?: boolean, sizeArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSnapshot();
result["poweredOn"] = poweredOnArg;
result["created"] = createdArg;
result["size"] = sizeArg;
return result;
}
}
