/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createProductSectionList(productSectionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProductSectionList();
var items = result["productSection"];
for (var obj of productSectionArg) {
	items.add(obj);
}
return result;
}
}
