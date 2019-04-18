/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRegisterVAppParams(descriptionArg?: string, externalNatIpMapArg?: any, nameArg?: string, nicIpMapArg?: any, ovfArg?: string, ovfToVdcNetworkMapArg?: any, vsToVmxMapArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRegisterVAppParams();
result["ovf"] = ovfArg;
result["vsToVmxMap"] = vsToVmxMapArg;
result["ovfToVdcNetworkMap"] = ovfToVdcNetworkMapArg;
result["nicIpMap"] = nicIpMapArg;
result["externalNatIpMap"] = externalNatIpMapArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
