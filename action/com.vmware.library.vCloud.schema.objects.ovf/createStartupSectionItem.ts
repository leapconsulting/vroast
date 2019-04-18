/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createStartupSectionItem(orderArg?: number, startActionArg?: string, startDelayArg?: number, stopActionArg?: string, stopDelayArg?: number, waitingForGuestArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclStartupSectionItem();
result["startAction"] = startActionArg;
result["startDelay"] = startDelayArg;
result["stopAction"] = stopActionArg;
result["stopDelay"] = stopDelayArg;
result["waitingForGuest"] = waitingForGuestArg;
result["order"] = orderArg;
return result;
}
}
