/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOperatingSystemFamilyInfo(nameArg?: string, operatingSystemArg?: Array<any>, operatingSystemFamilyIdArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOperatingSystemFamilyInfo();
result["operatingSystemFamilyId"] = operatingSystemFamilyIdArg;
var items = result["operatingSystem"];
for (var obj of operatingSystemArg) {
	items.add(obj);
}
result["name"] = nameArg;
return result;
}
}
