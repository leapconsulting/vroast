/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultProviderVdcStorageProfileRecord(isEnabledArg?: boolean, metadataArg?: any, nameArg?: string, numberOfConditionsArg?: number, providerVdcArg?: string, storageProfileMorefArg?: string, storageProvisionedMBArg?: number, storageRequestedMBArg?: number, storageTotalMBArg?: number, storageUsedMBArg?: number, vcArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultProviderVdcStorageProfileRecord();
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["storageUsedMB"] = storageUsedMBArg;
result["providerVdc"] = providerVdcArg;
result["vc"] = vcArg;
result["numberOfConditions"] = numberOfConditionsArg;
result["storageProvisionedMB"] = storageProvisionedMBArg;
result["storageRequestedMB"] = storageRequestedMBArg;
result["storageTotalMB"] = storageTotalMBArg;
result["storageProfileMoref"] = storageProfileMorefArg;
result["name"] = nameArg;
return result;
}
}
