/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createEvent(ownerArg?: any, serviceNamespaceArg?: string, successArg?: boolean, typeArg?: string, typeFullArg?: string, userArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEvent();
if ((ownerArg == null) || (ownerArg instanceof VclReference)) {
	result["owner"] = ownerArg;
} else {
	result["owner"] = ownerArg.getReference();
}
if ((userArg == null) || (userArg instanceof VclReference)) {
	result["user"] = userArg;
} else {
	result["user"] = userArg.getReference();
}
result["serviceNamespace"] = serviceNamespaceArg;
result["typeFull"] = typeFullArg;
result["success"] = successArg;
result["type"] = typeArg;
return result;
}
}
