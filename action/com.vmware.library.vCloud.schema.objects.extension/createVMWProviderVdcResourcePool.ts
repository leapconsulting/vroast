/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWProviderVdcResourcePool(enabledArg?: boolean, primaryArg?: boolean, resourcePoolRefArg?: any, resourcePoolVimObjectRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWProviderVdcResourcePool();
result["enabled"] = enabledArg;
result["resourcePoolVimObjectRef"] = resourcePoolVimObjectRefArg;
if ((resourcePoolRefArg == null) || (resourcePoolRefArg instanceof VclReference)) {
	result["resourcePoolRef"] = resourcePoolRefArg;
} else {
	result["resourcePoolRef"] = resourcePoolRefArg.getReference();
}
result["primary"] = primaryArg;
return result;
}
}
