/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgOperationLimitsSettings(consolesPerVmLimitArg?: number, operationsPerOrgArg?: number, operationsPerUserArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgOperationLimitsSettings();
result["consolesPerVmLimit"] = consolesPerVmLimitArg;
result["operationsPerUser"] = operationsPerUserArg;
result["operationsPerOrg"] = operationsPerOrgArg;
return result;
}
}
