/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createBundleUploadParams(fileSizeArg?: number, serviceNamespaceArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclBundleUploadParams();
result["serviceNamespace"] = serviceNamespaceArg;
result["fileSize"] = fileSizeArg;
return result;
}
}
