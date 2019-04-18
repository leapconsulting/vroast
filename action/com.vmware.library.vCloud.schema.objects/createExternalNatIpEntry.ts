/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createExternalNatIpEntry(destinationNatIpArg?: string, sourceNatIpArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclExternalNatIpEntry();
result["destinationNatIp"] = destinationNatIpArg;
result["sourceNatIp"] = sourceNatIpArg;
return result;
}
}
