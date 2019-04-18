/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
export function createCpuCompatibilitySection(infoArg?: any, levelArg?: Array<any>, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCpuCompatibilitySection();
result["info"] = infoArg;
result["required"] = requiredArg;
var items = result["level"];
for (var obj of levelArg) {
	items.add(obj);
}
return result;
}
}
