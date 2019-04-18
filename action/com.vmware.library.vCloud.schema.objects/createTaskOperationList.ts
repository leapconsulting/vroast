/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createTaskOperationList(operationArg?: Array<string>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclTaskOperationList();
var items = result["operation"];
for (var obj of operationArg) {
	items.add(obj);
}
return result;
}
}
