/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultDiskRecord(busSubTypeArg?: string, busTypeArg?: string, busTypeDescArg?: string, datastoreArg?: string, datastoreNameArg?: string, isAttachedArg?: boolean, metadataArg?: any, nameArg?: string, ownerNameArg?: string, sizeBArg?: number, statusArg?: string, storageProfileArg?: string, storageProfileNameArg?: string, taskArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultDiskRecord();
result["task"] = taskArg;
result["storageProfile"] = storageProfileArg;
result["metadata"] = metadataArg;
result["storageProfileName"] = storageProfileNameArg;
result["datastore"] = datastoreArg;
result["busType"] = busTypeArg;
result["busSubType"] = busSubTypeArg;
result["datastoreName"] = datastoreNameArg;
result["sizeB"] = sizeBArg;
result["ownerName"] = ownerNameArg;
result["vdcName"] = vdcNameArg;
result["busTypeDesc"] = busTypeDescArg;
result["isAttached"] = isAttachedArg;
result["vdc"] = vdcArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
