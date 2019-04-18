/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultDatastoreRecord(datastoreTypeArg?: string, isDeletedArg?: boolean, isEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, numberOfProviderVdcsArg?: number, provisionedStorageMBArg?: number, requestedStorageMBArg?: number, storageMBArg?: number, storageUsedMBArg?: number, vcArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultDatastoreRecord();
result["numberOfProviderVdcs"] = numberOfProviderVdcsArg;
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["storageUsedMB"] = storageUsedMBArg;
result["isDeleted"] = isDeletedArg;
result["vc"] = vcArg;
result["vcName"] = vcNameArg;
result["moref"] = morefArg;
result["storageMB"] = storageMBArg;
result["datastoreType"] = datastoreTypeArg;
result["provisionedStorageMB"] = provisionedStorageMBArg;
result["requestedStorageMB"] = requestedStorageMBArg;
result["name"] = nameArg;
return result;
}
}
