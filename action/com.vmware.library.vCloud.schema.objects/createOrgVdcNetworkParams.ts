/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgVdcNetworkParams(configurationArg?: any, descriptionArg?: string, edgeGatewayArg?: any, isSharedArg?: boolean, nameArg?: string, operationKeyArg?: string, serviceConfigArg?: any, statusArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgVdcNetworkParams();
result["isShared"] = isSharedArg;
if ((edgeGatewayArg == null) || (edgeGatewayArg instanceof VclReference)) {
	result["edgeGateway"] = edgeGatewayArg;
} else {
	result["edgeGateway"] = edgeGatewayArg.getReference();
}
result["serviceConfig"] = serviceConfigArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["configuration"] = configurationArg;
return result;
}
}
