/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWProviderVdcResourcePoolSet(vMWProviderVdcResourcePoolArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWProviderVdcResourcePoolSet();
var items = result["vMWProviderVdcResourcePool"];
for (var obj of vMWProviderVdcResourcePoolArg) {
	items.add(obj);
}
return result;
}
}
