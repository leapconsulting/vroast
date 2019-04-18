/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createPrepareHostParams(passwordArg?: string, usernameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclPrepareHostParams();
result["username"] = usernameArg;
result["password"] = passwordArg;
return result;
}
}
