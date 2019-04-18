/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createIpScopes(ipScopeArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpScopes();
var items = result["ipScope"];
for (var obj of ipScopeArg) {
	items.add(obj);
}
return result;
}
}
