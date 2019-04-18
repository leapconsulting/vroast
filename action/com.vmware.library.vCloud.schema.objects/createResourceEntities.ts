/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createResourceEntities(resourceEntityArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclResourceEntities();
var items = result["resourceEntity"];
for (var obj of resourceEntityArg) {
	items.add(obj);
}
return result;
}
}
