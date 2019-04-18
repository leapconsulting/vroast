/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminTaskRecord(cellNameArg?: string, endDateArg?: any, hasOwnerArg?: boolean, metadataArg?: any, nameArg?: string, objectArg?: string, objectNameArg?: string, objectTypeArg?: string, orgArg?: string, orgNameArg?: string, ownerArg?: string, ownerNameArg?: string, serviceNamespaceArg?: string, startDateArg?: any, statusArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminTaskRecord();
result["owner"] = ownerArg;
result["org"] = orgArg;
result["objectType"] = objectTypeArg;
result["metadata"] = metadataArg;
result["serviceNamespace"] = serviceNamespaceArg;
result["orgName"] = orgNameArg;
result["ownerName"] = ownerNameArg;
result["endDate"] = endDateArg;
result["objectName"] = objectNameArg;
result["startDate"] = startDateArg;
result["cellName"] = cellNameArg;
result["hasOwner"] = hasOwnerArg;
result["object"] = objectArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
