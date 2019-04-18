/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSession(orgArg?: string, userArg?: string, userIdArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSession();
result["org"] = orgArg;
result["user"] = userArg;
result["userId"] = userIdArg;
return result;
}
}
