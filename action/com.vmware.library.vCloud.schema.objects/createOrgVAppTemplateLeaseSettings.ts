/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgVAppTemplateLeaseSettings(deleteOnStorageLeaseExpirationArg?: boolean, storageLeaseSecondsArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgVAppTemplateLeaseSettings();
result["deleteOnStorageLeaseExpiration"] = deleteOnStorageLeaseExpirationArg;
result["storageLeaseSeconds"] = storageLeaseSecondsArg;
return result;
}
}
