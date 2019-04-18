/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpRange(endAddressArg?: string, startAddressArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpRange();
result["startAddress"] = startAddressArg;
result["endAddress"] = endAddressArg;
return result;
}
}
