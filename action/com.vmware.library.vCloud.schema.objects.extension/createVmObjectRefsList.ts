/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVmObjectRefsList(numberOfPagesArg?: number, pageArg?: number, vmObjectRefArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmObjectRefsList();
var items = result["vmObjectRef"];
for (var obj of vmObjectRefArg) {
	items.add(obj);
}
result["numberOfPages"] = numberOfPagesArg;
result["page"] = pageArg;
return result;
}
}
