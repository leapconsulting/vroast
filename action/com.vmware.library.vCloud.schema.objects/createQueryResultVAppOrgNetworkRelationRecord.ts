/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVAppOrgNetworkRelationRecord(configurationTypeArg?: string, metadataArg?: any, nameArg?: string, orgArg?: string, orgNetworkArg?: string, orgNetworkNameArg?: string, ownerNameArg?: string, statusArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVAppOrgNetworkRelationRecord();
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["configurationType"] = configurationTypeArg;
result["orgNetworkName"] = orgNetworkNameArg;
result["orgNetwork"] = orgNetworkArg;
result["ownerName"] = ownerNameArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
