/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyAdminVdc(targetEntityArg?: vCloud.AdminVdc, allocationModelArg?: string, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, isThinProvisionArg?: boolean, nameArg?: string, networkPoolReferenceArg?: any, networkQuotaArg?: number, nicQuotaArg?: number, operationKeyArg?: string, overCommitAllowedArg?: boolean, providerVdcReferenceArg?: any, resourceEntitiesArg?: any, resourceGuaranteedCpuArg?: number, resourceGuaranteedMemoryArg?: number, storageCapacityArg?: any, usedNetworkCountArg?: number, usesFastProvisioningArg?: boolean, vCpuInMhzArg?: number, vdcStorageProfilesArg?: any, vendorServicesArg?: any, vmQuotaArg?: number): vCloud.AdminVdc {// WARNING: Auto generated code. Please, do not edit this code.
if (providerVdcReferenceArg != null) {
	if (providerVdcReferenceArg instanceof VclReference) {
	    targetEntityArg["providerVdcReference"] = providerVdcReferenceArg;
	} else {
	    targetEntityArg["providerVdcReference"] = providerVdcReferenceArg.getReference();
	}
}
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
if (vendorServicesArg != null) {
	targetEntityArg["vendorServices"] = vendorServicesArg;
}
if (usesFastProvisioningArg != null) {
	targetEntityArg["usesFastProvisioning"] = usesFastProvisioningArg;
}
if (overCommitAllowedArg != null) {
	targetEntityArg["overCommitAllowed"] = overCommitAllowedArg;
}
if (vCpuInMhzArg != null) {
	targetEntityArg["vCpuInMhz"] = vCpuInMhzArg;
}
if (networkPoolReferenceArg != null) {
	if (networkPoolReferenceArg instanceof VclReference) {
	    targetEntityArg["networkPoolReference"] = networkPoolReferenceArg;
	} else {
	    targetEntityArg["networkPoolReference"] = networkPoolReferenceArg.getReference();
	}
}
if (resourceGuaranteedMemoryArg != null) {
	targetEntityArg["resourceGuaranteedMemory"] = resourceGuaranteedMemoryArg;
}
if (resourceGuaranteedCpuArg != null) {
	targetEntityArg["resourceGuaranteedCpu"] = resourceGuaranteedCpuArg;
}
if (isThinProvisionArg != null) {
	targetEntityArg["isThinProvision"] = isThinProvisionArg;
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
