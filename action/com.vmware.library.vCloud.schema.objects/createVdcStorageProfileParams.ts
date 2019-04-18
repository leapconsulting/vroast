/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVdcStorageProfileParams(defaultArg?: boolean, enabledArg?: boolean, limitArg?: number, providerVdcStorageProfileArg?: any, unitsArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVdcStorageProfileParams();
result["enabled"] = enabledArg;
result["limit"] = limitArg;
if ((providerVdcStorageProfileArg == null) || (providerVdcStorageProfileArg instanceof VclReference)) {
	result["providerVdcStorageProfile"] = providerVdcStorageProfileArg;
} else {
	result["providerVdcStorageProfile"] = providerVdcStorageProfileArg.getReference();
}
result["default"] = defaultArg;
result["units"] = unitsArg;
return result;
}
}
