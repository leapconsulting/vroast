/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyGateway(targetEntityArg?: vCloud.Gateway, configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): vCloud.Gateway {// WARNING: Auto generated code. Please, do not edit this code.
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
