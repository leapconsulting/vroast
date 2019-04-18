/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultOrgRecord(canPublishCatalogsArg?: boolean, deployedVMQuotaArg?: number, displayNameArg?: string, isEnabledArg?: boolean, isReadOnlyArg?: boolean, metadataArg?: any, nameArg?: string, numberOfCatalogsArg?: number, numberOfDisksArg?: number, numberOfGroupsArg?: number, numberOfVAppsArg?: number, numberOfVdcsArg?: number, storedVMQuotaArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultOrgRecord();
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["numberOfDisks"] = numberOfDisksArg;
result["numberOfVApps"] = numberOfVAppsArg;
result["deployedVMQuota"] = deployedVMQuotaArg;
result["storedVMQuota"] = storedVMQuotaArg;
result["numberOfVdcs"] = numberOfVdcsArg;
result["canPublishCatalogs"] = canPublishCatalogsArg;
result["numberOfCatalogs"] = numberOfCatalogsArg;
result["numberOfGroups"] = numberOfGroupsArg;
result["isReadOnly"] = isReadOnlyArg;
result["name"] = nameArg;
result["displayName"] = displayNameArg;
return result;
}
}
