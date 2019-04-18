/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFilesList(fileArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFilesList();
var items = result["file"];
for (var obj of fileArg) {
	items.add(obj);
}
return result;
}
}
