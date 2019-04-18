/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function updateProgressBlockingTask(targetEntityArg?: vCloud.BlockingTask, messageArg?: string, timeoutArg?: number): void {// WARNING: Auto generated code. Please, do not edit this code.
targetEntityArg.updateProgress(messageArg,timeoutArg);
}
}
