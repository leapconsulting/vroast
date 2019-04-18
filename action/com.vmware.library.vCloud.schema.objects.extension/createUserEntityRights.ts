/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createUserEntityRights(entityRightsArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclUserEntityRights();
var items = result["entityRights"];
for (var obj of entityRightsArg) {
	items.add(obj);
}
return result;
}
}
