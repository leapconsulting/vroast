/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSupportedHardwareVersions(supportedHardwareVersionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSupportedHardwareVersions();
var items = result["supportedHardwareVersion"];
for (var obj of supportedHardwareVersionArg) {
	items.add(obj);
}
return result;
}
}
