/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createShieldManagerParams(associatedVimServerArg?: any, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, passwordArg?: string, urlArg?: string, usernameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclShieldManagerParams();
result["username"] = usernameArg;
result["password"] = passwordArg;
result["url"] = urlArg;
if ((associatedVimServerArg == null) || (associatedVimServerArg instanceof VclReference)) {
	result["associatedVimServer"] = associatedVimServerArg;
} else {
	result["associatedVimServer"] = associatedVimServerArg.getReference();
}
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
