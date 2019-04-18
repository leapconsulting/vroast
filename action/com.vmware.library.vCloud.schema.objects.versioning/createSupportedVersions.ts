/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.versioning {
export function createSupportedVersions(versionInfoArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSupportedVersions();
var items = result["versionInfo"];
for (var obj of versionInfoArg) {
	items.add(obj);
}
return result;
}
}
