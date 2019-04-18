/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultNetworkPoolRecord(isBusyArg?: boolean, metadataArg?: any, nameArg?: string, networkPoolTypeArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultNetworkPoolRecord();
result["metadata"] = metadataArg;
result["isBusy"] = isBusyArg;
result["networkPoolType"] = networkPoolTypeArg;
result["name"] = nameArg;
return result;
}
}
