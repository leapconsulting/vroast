/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAccessSettings(accessSettingArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAccessSettings();
var items = result["accessSetting"];
for (var obj of accessSettingArg) {
	items.add(obj);
}
return result;
}
}
