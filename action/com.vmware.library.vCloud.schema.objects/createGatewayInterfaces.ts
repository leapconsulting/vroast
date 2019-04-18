/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGatewayInterfaces(gatewayInterfaceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGatewayInterfaces();
var items = result["gatewayInterface"];
for (var obj of gatewayInterfaceArg) {
	items.add(obj);
}
return result;
}
}
