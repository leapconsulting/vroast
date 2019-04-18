/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminAllocatedExternalAddressRecord(ipAddressArg?: string, linkedNetworkArg?: string, metadataArg?: any, networkArg?: string, orgArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminAllocatedExternalAddressRecord();
result["linkedNetwork"] = linkedNetworkArg;
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["ipAddress"] = ipAddressArg;
result["network"] = networkArg;
return result;
}
}
