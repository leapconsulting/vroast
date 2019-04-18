/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyExternalNetwork(targetEntityArg?: vCloud.ExternalNetwork, configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, providerInfoArg?: string): vCloud.ExternalNetwork {// WARNING: Auto generated code. Please, do not edit this code.
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (providerInfoArg != null) {
	targetEntityArg["providerInfo"] = providerInfoArg;
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
