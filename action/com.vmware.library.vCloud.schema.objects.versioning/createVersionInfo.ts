/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.versioning {
export function createVersionInfo(loginUrlArg?: string, mediaTypeMappingArg?: Array<any>, versionArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVersionInfo();
result["version"] = versionArg;
result["loginUrl"] = loginUrlArg;
var items = result["mediaTypeMapping"];
for (var obj of mediaTypeMappingArg) {
	items.add(obj);
}
return result;
}
}
