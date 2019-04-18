/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createProviderVdcStorageProfileParams(capacityTotalArg?: number, capacityUsedArg?: number, descriptionArg?: string, enabledArg?: boolean, nameArg?: string, operationKeyArg?: string, unitsArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclProviderVdcStorageProfileParams();
result["capacityTotal"] = capacityTotalArg;
result["capacityUsed"] = capacityUsedArg;
result["enabled"] = enabledArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["units"] = unitsArg;
return result;
}
}
