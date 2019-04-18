/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayDhcpService(isEnabledArg?: boolean, poolArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayDhcpService();
result["isEnabled"] = isEnabledArg;
var items = result["pool"];
for (var obj of poolArg) {
	items.add(obj);
}
return result;
}
}
