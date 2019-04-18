/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
export function createDhcpOptionsParams(option121Arg?: any, option150Arg?: any, option26Arg?: string, option66Arg?: string, option67Arg?: string, othersArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDhcpOptionsParams();
result["option26"] = option26Arg;
result["option121"] = option121Arg;
result["option150"] = option150Arg;
var items = result["others"];
for (var obj of othersArg) {
	items.add(obj);
}
result["option66"] = option66Arg;
result["option67"] = option67Arg;
return result;
}
}
