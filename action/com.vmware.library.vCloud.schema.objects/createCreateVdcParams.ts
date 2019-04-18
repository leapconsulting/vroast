/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCreateVdcParams(allocationModelArg?: string, computeCapacityArg?: any, descriptionArg?: string, isEnabledArg?: boolean, isThinProvisionArg?: boolean, nameArg?: string, networkPoolReferenceArg?: any, networkQuotaArg?: number, nicQuotaArg?: number, overCommitAllowedArg?: boolean, providerVdcReferenceArg?: any, resourceGuaranteedCpuArg?: number, resourceGuaranteedMemoryArg?: number, usesFastProvisioningArg?: boolean, vCpuInMhzArg?: number, vdcStorageProfileArg?: Array<any>, vmQuotaArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCreateVdcParams();
if ((providerVdcReferenceArg == null) || (providerVdcReferenceArg instanceof VclReference)) {
	result["providerVdcReference"] = providerVdcReferenceArg;
} else {
	result["providerVdcReference"] = providerVdcReferenceArg.getReference();
}
result["computeCapacity"] = computeCapacityArg;
result["isEnabled"] = isEnabledArg;
var items = result["vdcStorageProfile"];
for (var obj of vdcStorageProfileArg) {
	items.add(obj);
}
result["allocationModel"] = allocationModelArg;
result["networkQuota"] = networkQuotaArg;
result["nicQuota"] = nicQuotaArg;
result["vmQuota"] = vmQuotaArg;
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
return result;
}
}
