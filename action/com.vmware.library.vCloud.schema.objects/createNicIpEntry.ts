/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNicIpEntry(destinationNicIpArg?: string, sourceNicIpArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNicIpEntry();
result["sourceNicIp"] = sourceNicIpArg;
result["destinationNicIp"] = destinationNicIpArg;
return result;
}
}
