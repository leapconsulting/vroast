/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWVdcTemplates(vMWVdcTemplateArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWVdcTemplates();
var items = result["vMWVdcTemplate"];
for (var obj of vMWVdcTemplateArg) {
	items.add(obj);
}
return result;
}
}
