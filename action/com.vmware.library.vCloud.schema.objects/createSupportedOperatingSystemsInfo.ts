/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSupportedOperatingSystemsInfo(operatingSystemFamilyInfoArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSupportedOperatingSystemsInfo();
var items = result["operatingSystemFamilyInfo"];
for (var obj of operatingSystemFamilyInfoArg) {
	items.add(obj);
}
return result;
}
}
