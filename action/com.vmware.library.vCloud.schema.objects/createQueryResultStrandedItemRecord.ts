/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultStrandedItemRecord(deletionDateArg?: any, metadataArg?: any, nameArg?: string, numberOfPurgeAttemptsArg?: number, parentArg?: string, parentNameArg?: string, vimObjectTypeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultStrandedItemRecord();
result["deletionDate"] = deletionDateArg;
result["vimObjectType"] = vimObjectTypeArg;
result["metadata"] = metadataArg;
result["numberOfPurgeAttempts"] = numberOfPurgeAttemptsArg;
result["parentName"] = parentNameArg;
result["name"] = nameArg;
result["parent"] = parentArg;
return result;
}
}
