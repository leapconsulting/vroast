/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgGeneralSettings(canPublishCatalogsArg?: boolean, canPublishExternallyArg?: boolean, canSubscribeArg?: boolean, delayAfterPowerOnSecondsArg?: number, deployedVMQuotaArg?: number, storedVmQuotaArg?: number, useServerBootSequenceArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgGeneralSettings();
result["storedVmQuota"] = storedVmQuotaArg;
result["deployedVMQuota"] = deployedVMQuotaArg;
result["canPublishCatalogs"] = canPublishCatalogsArg;
result["delayAfterPowerOnSeconds"] = delayAfterPowerOnSecondsArg;
result["canSubscribe"] = canSubscribeArg;
result["canPublishExternally"] = canPublishExternallyArg;
result["useServerBootSequence"] = useServerBootSequenceArg;
return result;
}
}
