/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createExtensionVersions(versionArg?: Array<string>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclExtensionVersions();
var items = result["version"];
for (var obj of versionArg) {
	items.add(obj);
}
return result;
}
}
