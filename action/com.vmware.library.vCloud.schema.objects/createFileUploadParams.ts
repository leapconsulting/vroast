/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createFileUploadParams(fileSizeArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFileUploadParams();
result["fileSize"] = fileSizeArg;
return result;
}
}
