/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.environment {
export function createPropertySection(propertyArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclPropertySection();
var items = result["property"];
for (var obj of propertyArg) {
	items.add(obj);
}
return result;
}
}
