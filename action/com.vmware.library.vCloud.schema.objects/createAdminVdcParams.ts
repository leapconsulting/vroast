/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAdminVdcParams(allocationModelArg?: string, availableNetworksArg?: any, capabilitiesArg?: any, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, isThinProvisionArg?: boolean, nameArg?: string, networkPoolReferenceArg?: any, networkQuotaArg?: number, nicQuotaArg?: number, operationKeyArg?: string, overCommitAllowedArg?: boolean, providerVdcReferenceArg?: any, resourceEntitiesArg?: any, resourceGuaranteedCpuArg?: number, resourceGuaranteedMemoryArg?: number, statusArg?: number, storageCapacityArg?: any, usedNetworkCountArg?: number, usesFastProvisioningArg?: boolean, vCpuInMhzArg?: number, vdcStorageProfilesArg?: any, vendorServicesArg?: any, vmQuotaArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminVdcParams();
if ((providerVdcReferenceArg == null) || (providerVdcReferenceArg instanceof VclReference)) {
	result["providerVdcReference"] = providerVdcReferenceArg;
} else {
	result["providerVdcReference"] = providerVdcReferenceArg.getReference();
}
result["storageCapacity"] = storageCapacityArg;
result["availableNetworks"] = availableNetworksArg;
result["computeCapacity"] = computeCapacityArg;
result["isEnabled"] = isEnabledArg;
result["operationKey"] = operationKeyArg;
result["allocationModel"] = allocationModelArg;
result["resourceEntities"] = resourceEntitiesArg;
result["networkQuota"] = networkQuotaArg;
result["usedNetworkCount"] = usedNetworkCountArg;
result["vdcStorageProfiles"] = vdcStorageProfilesArg;
result["nicQuota"] = nicQuotaArg;
result["vmQuota"] = vmQuotaArg;
result["vendorServices"] = vendorServicesArg;
result["usesFastProvisioning"] = usesFastProvisioningArg;
result["overCommitAllowed"] = overCommitAllowedArg;
result["vCpuInMhz"] = vCpuInMhzArg;
if ((networkPoolReferenceArg == null) || (networkPoolReferenceArg instanceof VclReference)) {
	result["networkPoolReference"] = networkPoolReferenceArg;
} else {
	result["networkPoolReference"] = networkPoolReferenceArg.getReference();
}
result["resourceGuaranteedMemory"] = resourceGuaranteedMemoryArg;
result["resourceGuaranteedCpu"] = resourceGuaranteedCpuArg;
result["isThinProvision"] = isThinProvisionArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["capabilities"] = capabilitiesArg;
return result;
}
}
