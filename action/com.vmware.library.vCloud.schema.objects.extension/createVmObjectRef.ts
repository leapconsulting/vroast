/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVmObjectRef(moRefArg?: string, nameArg?: string, vimObjectTypeArg?: string, vimServerRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmObjectRef();
result["moRef"] = moRefArg;
result["vimObjectType"] = vimObjectTypeArg;
if ((vimServerRefArg == null) || (vimServerRefArg instanceof VclReference)) {
	result["vimServerRef"] = vimServerRefArg;
} else {
	result["vimServerRef"] = vimServerRefArg.getReference();
}
result["name"] = nameArg;
return result;
}
}
