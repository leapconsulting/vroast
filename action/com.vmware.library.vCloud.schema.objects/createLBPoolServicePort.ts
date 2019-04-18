/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLBPoolServicePort(algorithmArg?: string, healthCheckArg?: Array<any>, healthCheckPortArg?: string, isEnabledArg?: boolean, portArg?: string, protocolArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLBPoolServicePort();
result["algorithm"] = algorithmArg;
result["isEnabled"] = isEnabledArg;
result["healthCheckPort"] = healthCheckPortArg;
var items = result["healthCheck"];
for (var obj of healthCheckArg) {
	items.add(obj);
}
result["protocol"] = protocolArg;
result["port"] = portArg;
return result;
}
}
