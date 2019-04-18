/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminDiskRecord(busSubTypeArg?: string, busTypeArg?: string, busTypeDescArg?: string, datastoreArg?: string, datastoreNameArg?: string, isAttachedArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, ownerNameArg?: string, sizeBArg?: number, statusArg?: string, storageProfileArg?: string, storageProfileNameArg?: string, taskArg?: string, vcArg?: string, vdcArg?: string, vdcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminDiskRecord();
result["org"] = orgArg;
result["task"] = taskArg;
result["storageProfile"] = storageProfileArg;
result["metadata"] = metadataArg;
result["storageProfileName"] = storageProfileNameArg;
result["datastore"] = datastoreArg;
result["busType"] = busTypeArg;
result["busSubType"] = busSubTypeArg;
result["vc"] = vcArg;
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
