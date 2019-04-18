/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createHostObjectRef(moRefArg?: string, passwordArg?: string, usernameArg?: string, vimObjectTypeArg?: string, vimServerRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclHostObjectRef();
result["username"] = usernameArg;
result["password"] = passwordArg;
result["moRef"] = moRefArg;
result["vimObjectType"] = vimObjectTypeArg;
if ((vimServerRefArg == null) || (vimServerRefArg instanceof VclReference)) {
	result["vimServerRef"] = vimServerRefArg;
} else {
	result["vimServerRef"] = vimServerRefArg.getReference();
}
return result;
}
}
