/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVcTrustStoreUpdateParams(fileSizeArg?: number, passwordArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVcTrustStoreUpdateParams();
result["password"] = passwordArg;
result["fileSize"] = fileSizeArg;
return result;
}
}
