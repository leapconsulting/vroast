/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createLBPersistence(cookieModeArg?: string, cookieNameArg?: string, methodArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLBPersistence();
result["cookieName"] = cookieNameArg;
result["cookieMode"] = cookieModeArg;
result["method"] = methodArg;
return result;
}
}
