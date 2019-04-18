/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
export function createDhcpOption121StaticRouteParams(destinationSubnetArg?: string, routerArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDhcpOption121StaticRouteParams();
result["router"] = routerArg;
result["destinationSubnet"] = destinationSubnetArg;
return result;
}
}
