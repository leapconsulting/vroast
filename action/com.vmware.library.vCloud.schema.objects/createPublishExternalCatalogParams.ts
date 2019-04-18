/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createPublishExternalCatalogParams(catalogPublishedUrlArg?: string, isCacheEnabledArg?: boolean, isPublishedExternallyArg?: boolean, passwordArg?: string, preserveIdentityInfoFlagArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclPublishExternalCatalogParams();
result["password"] = passwordArg;
result["preserveIdentityInfoFlag"] = preserveIdentityInfoFlagArg;
result["catalogPublishedUrl"] = catalogPublishedUrlArg;
result["isCacheEnabled"] = isCacheEnabledArg;
result["isPublishedExternally"] = isPublishedExternallyArg;
return result;
}
}
