/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createStrings(fileRefArg?: string, langArg?: string, msgArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStrings();
var items = result["msg"];
for (var obj of msgArg) {
	items.add(obj);
}
result["lang"] = langArg;
result["fileRef"] = fileRefArg;
return result;
}
}
