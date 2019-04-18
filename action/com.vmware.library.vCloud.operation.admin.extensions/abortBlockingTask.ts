/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation.admin.extensions {
export function abortBlockingTask(targetEntityArg?: vCloud.BlockingTask, messageArg?: string): void {// WARNING: Auto generated code. Please, do not edit this code.
targetEntityArg.abort(messageArg);
}
}
