/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAllocatedIpAddress(allocationTypeArg?: string, ipAddressArg?: string, isDeployedArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAllocatedIpAddress();
result["allocationType"] = allocationTypeArg;
result["isDeployed"] = isDeployedArg;
result["ipAddress"] = ipAddressArg;
return result;
}
}
