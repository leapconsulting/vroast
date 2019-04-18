/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createTrustStoreUpdateParams(fileSizeArg?: number, passwordArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclTrustStoreUpdateParams();
result["password"] = passwordArg;
result["fileSize"] = fileSizeArg;
return result;
}
}
