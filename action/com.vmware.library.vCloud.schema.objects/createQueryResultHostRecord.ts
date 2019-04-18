/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultHostRecord(isBusyArg?: boolean, isCrossHostEnabledArg?: boolean, isDeletedArg?: boolean, isEnabledArg?: boolean, isHungArg?: boolean, isInMaintenanceModeArg?: boolean, isPendingUpgradeArg?: boolean, isPreparedArg?: boolean, isSupportedArg?: boolean, metadataArg?: any, nameArg?: string, numberOfVMsArg?: number, osVersionArg?: string, stateArg?: number, vcArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultHostRecord();
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["isBusy"] = isBusyArg;
result["osVersion"] = osVersionArg;
result["isDeleted"] = isDeletedArg;
result["isInMaintenanceMode"] = isInMaintenanceModeArg;
result["vc"] = vcArg;
result["vcName"] = vcNameArg;
result["isCrossHostEnabled"] = isCrossHostEnabledArg;
result["isHung"] = isHungArg;
result["isPendingUpgrade"] = isPendingUpgradeArg;
result["isPrepared"] = isPreparedArg;
result["isSupported"] = isSupportedArg;
result["numberOfVMs"] = numberOfVMsArg;
result["name"] = nameArg;
result["state"] = stateArg;
return result;
}
}
