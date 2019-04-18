/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLBPoolHealthCheck(healthThresholdArg?: string, intervalArg?: string, modeArg?: string, timeoutArg?: string, unhealthThresholdArg?: string, uriArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLBPoolHealthCheck();
result["healthThreshold"] = healthThresholdArg;
result["unhealthThreshold"] = unhealthThresholdArg;
result["interval"] = intervalArg;
result["uri"] = uriArg;
result["mode"] = modeArg;
result["timeout"] = timeoutArg;
return result;
}
}
