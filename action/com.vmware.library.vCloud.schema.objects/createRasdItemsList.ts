/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRasdItemsList(itemArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRasdItemsList();
var items = result["item"];
for (var obj of itemArg) {
	items.add(obj);
}
return result;
}
}
