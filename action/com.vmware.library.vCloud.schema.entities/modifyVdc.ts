/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyVdc(targetEntityArg?: vCloud.Vdc, allocationModelArg?: string, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, nameArg?: string, networkQuotaArg?: number, nicQuotaArg?: number, operationKeyArg?: string, resourceEntitiesArg?: any, storageCapacityArg?: any, usedNetworkCountArg?: number, vdcStorageProfilesArg?: any, vmQuotaArg?: number): vCloud.Vdc {// WARNING: Auto generated code. Please, do not edit this code.
if (storageCapacityArg != null) {
	targetEntityArg["storageCapacity"] = storageCapacityArg;
}
if (availableNetworksArg != null) {
	targetEntityArg["availableNetworks"] = availableNetworksArg;
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
if (allocationModelArg != null) {
	targetEntityArg["allocationModel"] = allocationModelArg;
}
if (resourceEntitiesArg != null) {
	targetEntityArg["resourceEntities"] = resourceEntitiesArg;
}
if (networkQuotaArg != null) {
	targetEntityArg["networkQuota"] = networkQuotaArg;
}
if (usedNetworkCountArg != null) {
	targetEntityArg["usedNetworkCount"] = usedNetworkCountArg;
}
if (vdcStorageProfilesArg != null) {
	targetEntityArg["vdcStorageProfiles"] = vdcStorageProfilesArg;
}
if (nicQuotaArg != null) {
	targetEntityArg["nicQuota"] = nicQuotaArg;
}
if (vmQuotaArg != null) {
	targetEntityArg["vmQuota"] = vmQuotaArg;
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
