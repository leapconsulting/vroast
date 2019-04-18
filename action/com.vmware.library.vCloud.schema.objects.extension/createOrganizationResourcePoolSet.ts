/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createOrganizationResourcePoolSet(resourcePoolVimObjectRefArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrganizationResourcePoolSet();
var items = result["resourcePoolVimObjectRef"];
for (var obj of resourcePoolVimObjectRefArg) {
	items.add(obj);
}
return result;
}
}
