/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAclAccess(accessArg?: string, entityArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAclAccess();
result["access"] = accessArg;
if ((entityArg == null) || (entityArg instanceof VclReference)) {
	result["entity"] = entityArg;
} else {
	result["entity"] = entityArg.getReference();
}
return result;
}
}
