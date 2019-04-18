/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyProviderVdc(targetEntityArg?: vCloud.ProviderVdc, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, nameArg?: string, networkPoolReferencesArg?: any, operationKeyArg?: string, storageCapacityArg?: any, storageProfilesArg?: any, vdcsArg?: any): vCloud.ProviderVdc {// WARNING: Auto generated code. Please, do not edit this code.
if (storageCapacityArg != null) {
	targetEntityArg["storageCapacity"] = storageCapacityArg;
}
if (availableNetworksArg != null) {
	targetEntityArg["availableNetworks"] = availableNetworksArg;
}
if (storageProfilesArg != null) {
	targetEntityArg["storageProfiles"] = storageProfilesArg;
}
if (vdcsArg != null) {
	targetEntityArg["vdcs"] = vdcsArg;
}
if (networkPoolReferencesArg != null) {
	targetEntityArg["networkPoolReferences"] = networkPoolReferencesArg;
}
if (computeCapacityArg != null) {
	targetEntityArg["computeCapacity"] = computeCapacityArg;
}
if (isEnabledArg != null) {
	targetEntityArg["isEnabled"] = isEnabledArg;
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
if (capabilitiesArg != null) {
	targetEntityArg["capabilities"] = capabilitiesArg;
}
return targetEntityArg;
}
}
