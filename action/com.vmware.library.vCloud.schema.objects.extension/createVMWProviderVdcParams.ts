/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVMWProviderVdcParams(defaultPasswordArg?: string, defaultUsernameArg?: string, descriptionArg?: string, highestSupportedHardwareVersionArg?: string, hostRefsArg?: any, isEnabledArg?: boolean, nameArg?: string, resourcePoolRefsArg?: any, storageProfileArg?: Array<string>, vimServerArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVMWProviderVdcParams();
result["hostRefs"] = hostRefsArg;
var items = result["storageProfile"];
for (var obj of storageProfileArg) {
	items.add(obj);
}
result["highestSupportedHardwareVersion"] = highestSupportedHardwareVersionArg;
result["resourcePoolRefs"] = resourcePoolRefsArg;
var items = result["vimServer"];
for (var obj of vimServerArg) {
	if ((obj == null) || (obj instanceof VclReference)) {
	    items.add(obj);
	} else {
	    items.add(obj.getReference());
	}
}
result["isEnabled"] = isEnabledArg;
result["defaultPassword"] = defaultPasswordArg;
result["defaultUsername"] = defaultUsernameArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
