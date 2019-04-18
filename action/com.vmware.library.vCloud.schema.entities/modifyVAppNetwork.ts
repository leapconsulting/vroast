/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyVAppNetwork(targetEntityArg?: vCloud.VAppNetwork, configurationArg?: any, deployedArg?: boolean, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): vCloud.VAppNetwork {// WARNING: Auto generated code. Please, do not edit this code.
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (deployedArg != null) {
	targetEntityArg["deployed"] = deployedArg;
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
