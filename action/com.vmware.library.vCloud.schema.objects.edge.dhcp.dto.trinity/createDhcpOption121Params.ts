/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
export function createDhcpOption121Params(staticRoutesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDhcpOption121Params();
var items = result["staticRoutes"];
for (var obj of staticRoutesArg) {
	items.add(obj);
}
return result;
}
}
