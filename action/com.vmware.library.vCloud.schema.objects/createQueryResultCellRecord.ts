/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultCellRecord(buildDateArg?: any, isActiveArg?: number, isVMwareVcArg?: number, metadataArg?: any, nameArg?: string, primaryIpArg?: string, versionArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultCellRecord();
result["version"] = versionArg;
result["metadata"] = metadataArg;
result["buildDate"] = buildDateArg;
result["isActive"] = isActiveArg;
result["isVMwareVc"] = isVMwareVcArg;
result["primaryIp"] = primaryIpArg;
result["name"] = nameArg;
return result;
}
}
