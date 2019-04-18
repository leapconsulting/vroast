/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultEdgeGatewayRecord(gatewayStatusArg?: string, haStatusArg?: string, isBusyArg?: boolean, metadataArg?: any, nameArg?: string, numberOfExtNetworksArg?: number, numberOfOrgNetworksArg?: number, vdcArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultEdgeGatewayRecord();
result["metadata"] = metadataArg;
result["numberOfExtNetworks"] = numberOfExtNetworksArg;
result["gatewayStatus"] = gatewayStatusArg;
result["isBusy"] = isBusyArg;
result["haStatus"] = haStatusArg;
result["numberOfOrgNetworks"] = numberOfOrgNetworksArg;
result["vdc"] = vdcArg;
result["name"] = nameArg;
return result;
}
}
