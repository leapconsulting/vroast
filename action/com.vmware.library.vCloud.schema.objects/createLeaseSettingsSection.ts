/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLeaseSettingsSection(deploymentLeaseExpirationArg?: any, deploymentLeaseInSecondsArg?: number, infoArg?: any, requiredArg?: boolean, storageLeaseExpirationArg?: any, storageLeaseInSecondsArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLeaseSettingsSection();
result["info"] = infoArg;
result["deploymentLeaseInSeconds"] = deploymentLeaseInSecondsArg;
result["storageLeaseInSeconds"] = storageLeaseInSecondsArg;
result["deploymentLeaseExpiration"] = deploymentLeaseExpirationArg;
result["storageLeaseExpiration"] = storageLeaseExpirationArg;
result["required"] = requiredArg;
return result;
}
}
