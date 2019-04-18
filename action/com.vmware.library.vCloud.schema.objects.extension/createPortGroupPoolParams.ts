/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createPortGroupPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, portGroupRefsArg?: any, statusArg?: number, usedNetworksCountArg?: number, vimServerArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclPortGroupPoolParams();
result["usedNetworksCount"] = usedNetworksCountArg;
if ((vimServerArg == null) || (vimServerArg instanceof VclReference)) {
	result["vimServer"] = vimServerArg;
} else {
	result["vimServer"] = vimServerArg.getReference();
}
result["operationKey"] = operationKeyArg;
result["portGroupRefs"] = portGroupRefsArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
