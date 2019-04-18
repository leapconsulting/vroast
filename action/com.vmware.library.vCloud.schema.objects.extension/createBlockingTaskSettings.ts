/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createBlockingTaskSettings(blockingTaskOperationsArg?: any, timeoutActionArg?: string, timeoutInMillisecondsArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclBlockingTaskSettings();
result["timeoutAction"] = timeoutActionArg;
result["blockingTaskOperations"] = blockingTaskOperationsArg;
result["timeoutInMilliseconds"] = timeoutInMillisecondsArg;
return result;
}
}
