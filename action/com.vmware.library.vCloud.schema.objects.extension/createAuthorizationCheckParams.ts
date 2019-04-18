/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAuthorizationCheckParams(httpMethodArg?: string, uRLArg?: string, userArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAuthorizationCheckParams();
result["httpMethod"] = httpMethodArg;
if ((userArg == null) || (userArg instanceof VclReference)) {
	result["user"] = userArg;
} else {
	result["user"] = userArg.getReference();
}
result["uRL"] = uRLArg;
return result;
}
}
