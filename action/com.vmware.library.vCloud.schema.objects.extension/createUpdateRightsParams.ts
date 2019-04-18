/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createUpdateRightsParams(addRightArg?: Array<any>, removeRightArg?: Array<string>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclUpdateRightsParams();
var items = result["addRight"];
for (var obj of addRightArg) {
	items.add(obj);
}
var items = result["removeRight"];
for (var obj of removeRightArg) {
	items.add(obj);
}
return result;
}
}
