/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAdminVdcStorageProfileParams(defaultArg?: boolean, descriptionArg?: string, enabledArg?: boolean, limitArg?: number, nameArg?: string, operationKeyArg?: string, providerVdcStorageProfileArg?: any, unitsArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminVdcStorageProfileParams();
result["enabled"] = enabledArg;
result["limit"] = limitArg;
if ((providerVdcStorageProfileArg == null) || (providerVdcStorageProfileArg instanceof VclReference)) {
	result["providerVdcStorageProfile"] = providerVdcStorageProfileArg;
} else {
	result["providerVdcStorageProfile"] = providerVdcStorageProfileArg.getReference();
}
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["default"] = defaultArg;
result["description"] = descriptionArg;
result["units"] = unitsArg;
return result;
}
}
