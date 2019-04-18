/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createStaticRoute(gatewayInterfaceArg?: any, interfaceArg?: string, nameArg?: string, networkArg?: string, nextHopIpArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStaticRoute();
if ((gatewayInterfaceArg == null) || (gatewayInterfaceArg instanceof VclReference)) {
	result["gatewayInterface"] = gatewayInterfaceArg;
} else {
	result["gatewayInterface"] = gatewayInterfaceArg.getReference();
}
result["nextHopIp"] = nextHopIpArg;
result["network"] = networkArg;
result["interface"] = interfaceArg;
result["name"] = nameArg;
return result;
}
}
