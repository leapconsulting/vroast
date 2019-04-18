/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNatOneToOneVmRule(externalIpAddressArg?: string, mappingModeArg?: string, vAppScopedVmIdArg?: string, vmNicIdArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatOneToOneVmRule();
result["externalIpAddress"] = externalIpAddressArg;
result["vAppScopedVmId"] = vAppScopedVmIdArg;
result["vmNicId"] = vmNicIdArg;
result["mappingMode"] = mappingModeArg;
return result;
}
}
