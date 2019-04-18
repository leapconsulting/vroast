/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createLookupServiceParams(lookupServiceUrlArg?: string, passwordArg?: string, userNameArg?: string, vCDUrlArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclLookupServiceParams();
result["password"] = passwordArg;
result["lookupServiceUrl"] = lookupServiceUrlArg;
result["vCDUrl"] = vCDUrlArg;
result["userName"] = userNameArg;
return result;
}
}
