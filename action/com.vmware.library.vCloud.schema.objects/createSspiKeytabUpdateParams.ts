/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSspiKeytabUpdateParams(fileSizeArg?: number, sspiServiceProviderNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSspiKeytabUpdateParams();
result["sspiServiceProviderName"] = sspiServiceProviderNameArg;
result["fileSize"] = fileSizeArg;
return result;
}
}
