/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNatOneToOneBasicRule(externalIpAddressArg?: string, internalIpAddressArg?: string, mappingModeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatOneToOneBasicRule();
result["externalIpAddress"] = externalIpAddressArg;
result["mappingMode"] = mappingModeArg;
result["internalIpAddress"] = internalIpAddressArg;
return result;
}
}
