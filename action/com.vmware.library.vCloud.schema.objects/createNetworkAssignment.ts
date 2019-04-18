/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkAssignment(containerNetworkArg?: string, innerNetworkArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkAssignment();
result["containerNetwork"] = containerNetworkArg;
result["innerNetwork"] = innerNetworkArg;
return result;
}
}
