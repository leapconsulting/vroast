/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSubAllocation(edgeGatewayArg?: any, ipRangesArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSubAllocation();
if ((edgeGatewayArg == null) || (edgeGatewayArg instanceof VclReference)) {
	result["edgeGateway"] = edgeGatewayArg;
} else {
	result["edgeGateway"] = edgeGatewayArg.getReference();
}
result["ipRanges"] = ipRangesArg;
return result;
}
}
