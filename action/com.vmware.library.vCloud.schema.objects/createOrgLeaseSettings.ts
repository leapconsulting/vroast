/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgLeaseSettings(deleteOnStorageLeaseExpirationArg?: boolean, deploymentLeaseSecondsArg?: number, storageLeaseSecondsArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgLeaseSettings();
result["deleteOnStorageLeaseExpiration"] = deleteOnStorageLeaseExpirationArg;
result["deploymentLeaseSeconds"] = deploymentLeaseSecondsArg;
result["storageLeaseSeconds"] = storageLeaseSecondsArg;
return result;
}
}
