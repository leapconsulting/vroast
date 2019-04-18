/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultTaskRecord(endDateArg?: any, metadataArg?: any, nameArg?: string, objectArg?: string, objectNameArg?: string, objectTypeArg?: string, orgArg?: string, orgNameArg?: string, ownerNameArg?: string, serviceNamespaceArg?: string, startDateArg?: any, statusArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultTaskRecord();
result["org"] = orgArg;
result["objectType"] = objectTypeArg;
result["metadata"] = metadataArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["orgName"] = orgNameArg;
result["ownerName"] = ownerNameArg;
result["endDate"] = endDateArg;
result["objectName"] = objectNameArg;
result["startDate"] = startDateArg;
result["object"] = objectArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
