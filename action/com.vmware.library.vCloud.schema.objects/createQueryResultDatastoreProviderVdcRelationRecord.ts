/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultDatastoreProviderVdcRelationRecord(datastoreArg?: string, datastoreTypeArg?: string, isDeletedArg?: boolean, isEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, providerVdcArg?: string, provisionedStorageMBArg?: number, requestedStorageMBArg?: number, storageMBArg?: number, storageUsedMBArg?: number, vcArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultDatastoreProviderVdcRelationRecord();
result["metadata"] = metadataArg;
result["datastore"] = datastoreArg;
result["isEnabled"] = isEnabledArg;
result["storageUsedMB"] = storageUsedMBArg;
result["providerVdc"] = providerVdcArg;
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
