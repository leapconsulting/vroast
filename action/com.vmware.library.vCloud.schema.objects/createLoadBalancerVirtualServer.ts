/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLoadBalancerVirtualServer(descriptionArg?: string, interfaceArg?: any, ipAddressArg?: string, isEnabledArg?: boolean, loadBalancerTemplatesArg?: Array<any>, loggingArg?: boolean, nameArg?: string, poolArg?: string, serviceProfileArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLoadBalancerVirtualServer();
result["isEnabled"] = isEnabledArg;
result["ipAddress"] = ipAddressArg;
if ((interfaceArg == null) || (interfaceArg instanceof VclReference)) {
	result["interface"] = interfaceArg;
} else {
	result["interface"] = interfaceArg.getReference();
}
var items = result["serviceProfile"];
for (var obj of serviceProfileArg) {
	items.add(obj);
}
result["logging"] = loggingArg;
var items = result["loadBalancerTemplates"];
for (var obj of loadBalancerTemplatesArg) {
	items.add(obj);
}
result["name"] = nameArg;
result["pool"] = poolArg;
result["description"] = descriptionArg;
return result;
}
}
