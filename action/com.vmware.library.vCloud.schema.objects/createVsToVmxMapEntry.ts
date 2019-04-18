/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVsToVmxMapEntry(biosUuidArg?: string, datastorePathArg?: string, storageProfileArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVsToVmxMapEntry();
result["storageProfile"] = storageProfileArg;
result["biosUuid"] = biosUuidArg;
result["datastorePath"] = datastorePathArg;
return result;
}
}
