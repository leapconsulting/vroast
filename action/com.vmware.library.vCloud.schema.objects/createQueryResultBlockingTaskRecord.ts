/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultBlockingTaskRecord(creationDateArg?: any, expirationTimeArg?: any, hasOwnerArg?: boolean, jobStatusArg?: string, metadataArg?: any, operationNameArg?: string, originatingOrgArg?: string, originatingOrgNameArg?: string, ownerArg?: string, ownerNameArg?: string, statusArg?: string, taskArg?: string, timeoutActionArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultBlockingTaskRecord();
result["owner"] = ownerArg;
result["timeoutAction"] = timeoutActionArg;
result["task"] = taskArg;
result["creationDate"] = creationDateArg;
result["metadata"] = metadataArg;
result["operationName"] = operationNameArg;
result["ownerName"] = ownerNameArg;
result["hasOwner"] = hasOwnerArg;
result["jobStatus"] = jobStatusArg;
result["originatingOrg"] = originatingOrgArg;
result["originatingOrgName"] = originatingOrgNameArg;
result["status"] = statusArg;
result["expirationTime"] = expirationTimeArg;
return result;
}
}
