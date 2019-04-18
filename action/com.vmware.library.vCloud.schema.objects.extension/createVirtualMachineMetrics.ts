/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVirtualMachineMetrics(virtualMachineArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVirtualMachineMetrics();
var items = result["virtualMachine"];
for (var obj of virtualMachineArg) {
	items.add(obj);
}
return result;
}
}
