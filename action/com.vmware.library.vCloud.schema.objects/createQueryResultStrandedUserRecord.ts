/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultStrandedUserRecord(fullNameArg?: string, isInSyncArg?: boolean, metadataArg?: any, nameArg?: string, numberOfDeployedVMsArg?: number, numberOfStoredVMsArg?: number, orgArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultStrandedUserRecord();
result["org"] = orgArg;
result["fullName"] = fullNameArg;
result["metadata"] = metadataArg;
result["numberOfDeployedVMs"] = numberOfDeployedVMsArg;
result["numberOfStoredVMs"] = numberOfStoredVMsArg;
result["isInSync"] = isInSyncArg;
result["name"] = nameArg;
return result;
}
}
