/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyVMWProviderVdc(targetEntityArg?: vCloud.VmwProviderVdc, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, dataStoreRefsArg?: any, descriptionArg?: string, highestSupportedHardwareVersionArg?: string, hostReferencesArg?: any, isEnabledArg?: boolean, nameArg?: string, networkPoolReferencesArg?: any, operationKeyArg?: string, resourcePoolRefsArg?: any, storageCapacityArg?: any, storageProfilesArg?: any, vdcsArg?: any): vCloud.VmwProviderVdc {// WARNING: Auto generated code. Please, do not edit this code.
if (dataStoreRefsArg != null) {
	targetEntityArg["dataStoreRefs"] = dataStoreRefsArg;
}
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
if (highestSupportedHardwareVersionArg != null) {
	targetEntityArg["highestSupportedHardwareVersion"] = highestSupportedHardwareVersionArg;
}
if (resourcePoolRefsArg != null) {
	targetEntityArg["resourcePoolRefs"] = resourcePoolRefsArg;
}
if (hostReferencesArg != null) {
	targetEntityArg["hostReferences"] = hostReferencesArg;
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
