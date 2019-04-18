/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOvfToVdcNetworkEntry(ovfNetworkArg?: string, vdcNetworkArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOvfToVdcNetworkEntry();
result["ovfNetwork"] = ovfNetworkArg;
result["vdcNetwork"] = vdcNetworkArg;
return result;
}
}
