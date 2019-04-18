/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createEnvelope(contentArg?: any, langArg?: string, referencesArg?: any, sectionArg?: Array<any>, stringsArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEnvelope();
result["references"] = referencesArg;
var items = result["section"];
for (var obj of sectionArg) {
	items.add(obj);
}
var items = result["strings"];
for (var obj of stringsArg) {
	items.add(obj);
}
result["lang"] = langArg;
var value = new VclAbstractObject();
value.setValue(contentArg);
result["content"] = value;
return result;
}
}
