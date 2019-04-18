/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createBlockingTaskUpdateProgressParams(messageArg?: string, timeoutValueInMillisecondsArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclBlockingTaskUpdateProgressParams();
result["timeoutValueInMilliseconds"] = timeoutValueInMillisecondsArg;
result["message"] = messageArg;
return result;
}
}
