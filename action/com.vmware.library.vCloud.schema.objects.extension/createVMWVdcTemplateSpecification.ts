/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWVdcTemplateSpecification(automaticNetworkPoolReferenceArg?: any, fastProvisioningEnabledArg?: boolean, gatewayConfigurationArg?: any, networkPoolReferenceArg?: any, nicQuotaArg?: number, provisionedNetworkQuotaArg?: number, storageProfileArg?: Array<any>, thinProvisionArg?: boolean, vmQuotaArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWVdcTemplateSpecification();
var items = result["storageProfile"];
for (var obj of storageProfileArg) {
	items.add(obj);
}
result["provisionedNetworkQuota"] = provisionedNetworkQuotaArg;
result["gatewayConfiguration"] = gatewayConfigurationArg;
result["thinProvision"] = thinProvisionArg;
result["fastProvisioningEnabled"] = fastProvisioningEnabledArg;
result["automaticNetworkPoolReference"] = automaticNetworkPoolReferenceArg;
result["nicQuota"] = nicQuotaArg;
result["vmQuota"] = vmQuotaArg;
if ((networkPoolReferenceArg == null) || (networkPoolReferenceArg instanceof VclReference)) {
	result["networkPoolReference"] = networkPoolReferenceArg;
} else {
	result["networkPoolReference"] = networkPoolReferenceArg.getReference();
}
return result;
}
}
