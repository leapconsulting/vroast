/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createStrandedItemVimObjects(strandedItemVimObjectArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStrandedItemVimObjects();
var items = result["strandedItemVimObject"];
for (var obj of strandedItemVimObjectArg) {
	items.add(obj);
}
return result;
}
}
