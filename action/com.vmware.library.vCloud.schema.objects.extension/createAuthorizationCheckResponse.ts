/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAuthorizationCheckResponse(isAuthorizedArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAuthorizationCheckResponse();
result["isAuthorized"] = isAuthorizedArg;
return result;
}
}
