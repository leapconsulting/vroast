/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyOrgVdcNetwork(targetEntityArg?: vCloud.AdminOrgVdcNetwork, configurationArg?: any, descriptionArg?: string, edgeGatewayArg?: any, isSharedArg?: boolean, nameArg?: string, operationKeyArg?: string, serviceConfigArg?: any): vCloud.AdminOrgVdcNetwork {// WARNING: Auto generated code. Please, do not edit this code.
if (isSharedArg != null) {
	targetEntityArg["isShared"] = isSharedArg;
}
if (edgeGatewayArg != null) {
	if (edgeGatewayArg instanceof VclReference) {
	    targetEntityArg["edgeGateway"] = edgeGatewayArg;
	} else {
	    targetEntityArg["edgeGateway"] = edgeGatewayArg.getReference();
	}
}
if (serviceConfigArg != null) {
	targetEntityArg["serviceConfig"] = serviceConfigArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (configurationArg != null) {
	targetEntityArg["configuration"] = configurationArg;
}
return targetEntityArg;
}
}
