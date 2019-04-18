/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNatVmRule(externalIpAddressArg?: string, externalPortArg?: number, internalPortArg?: number, protocolArg?: string, vAppScopedVmIdArg?: string, vmNicIdArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatVmRule();
result["externalIpAddress"] = externalIpAddressArg;
result["externalPort"] = externalPortArg;
result["internalPort"] = internalPortArg;
result["vAppScopedVmId"] = vAppScopedVmIdArg;
result["vmNicId"] = vmNicIdArg;
result["protocol"] = protocolArg;
return result;
}
}
