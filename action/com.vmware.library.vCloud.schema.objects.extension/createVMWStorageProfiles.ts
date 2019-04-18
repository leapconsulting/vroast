/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWStorageProfiles(vMWStorageProfileArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWStorageProfiles();
var items = result["vMWStorageProfile"];
for (var obj of vMWStorageProfileArg) {
	items.add(obj);
}
return result;
}
}
