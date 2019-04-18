/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSubAllocations(subAllocationArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSubAllocations();
var items = result["subAllocation"];
for (var obj of subAllocationArg) {
	items.add(obj);
}
return result;
}
}
