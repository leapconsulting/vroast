/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyVMWNetworkPool(targetEntityArg?: vCloud.VmwNetworkPool, descriptionArg?: string, nameArg?: string, operationKeyArg?: string): vCloud.VmwNetworkPool {// WARNING: Auto generated code. Please, do not edit this code.
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
