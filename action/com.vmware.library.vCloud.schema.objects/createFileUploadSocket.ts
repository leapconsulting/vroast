/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFileUploadSocket(taskArg?: any, uploadLocationArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFileUploadSocket();
result["task"] = taskArg;
result["uploadLocation"] = uploadLocationArg;
return result;
}
}
