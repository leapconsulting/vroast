/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAllocatedExternalAddressRecord(ipAddressArg?: string, linkedNetworkArg?: string, metadataArg?: any, networkArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAllocatedExternalAddressRecord();
result["linkedNetwork"] = linkedNetworkArg;
result["metadata"] = metadataArg;
result["ipAddress"] = ipAddressArg;
result["network"] = networkArg;
return result;
}
}
