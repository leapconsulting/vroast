/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSnapshotSection(infoArg?: any, requiredArg?: boolean, snapshotArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSnapshotSection();
result["info"] = infoArg;
result["snapshot"] = snapshotArg;
result["required"] = requiredArg;
return result;
}
}
