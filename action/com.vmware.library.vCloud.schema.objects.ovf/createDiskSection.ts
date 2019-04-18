/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createDiskSection(diskArg?: Array<any>, infoArg?: any, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDiskSection();
result["info"] = infoArg;
var items = result["disk"];
for (var obj of diskArg) {
	items.add(obj);
}
result["required"] = requiredArg;
return result;
}
}
