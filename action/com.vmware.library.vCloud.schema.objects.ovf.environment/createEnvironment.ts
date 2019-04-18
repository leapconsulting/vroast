/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
export function createEnvironment(entityArg?: Array<any>, sectionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEnvironment();
var items = result["section"];
for (var obj of sectionArg) {
	items.add(obj);
}
var items = result["entity"];
for (var obj of entityArg) {
	items.add(obj);
}
return result;
}
}
