/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyVMWExternalNetwork(targetEntityArg?: vCloud.VmwExternalNetwork, configurationArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, vimPortGroupRefArg?: any): vCloud.VmwExternalNetwork {// WARNING: Auto generated code. Please, do not edit this code.
if (vimPortGroupRefArg != null) {
	targetEntityArg["vimPortGroupRef"] = vimPortGroupRefArg;
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
