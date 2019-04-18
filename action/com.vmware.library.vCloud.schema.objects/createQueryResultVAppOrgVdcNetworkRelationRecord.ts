/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVAppOrgVdcNetworkRelationRecord(entityTypeArg?: string, metadataArg?: any, nameArg?: string, orgArg?: string, orgVdcNetworkArg?: string, orgVdcNetworkNameArg?: string, ownerNameArg?: string, statusArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVAppOrgVdcNetworkRelationRecord();
result["entityType"] = entityTypeArg;
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["ownerName"] = ownerNameArg;
result["orgVdcNetworkName"] = orgVdcNetworkNameArg;
result["orgVdcNetwork"] = orgVdcNetworkArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
