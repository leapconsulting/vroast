/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf {
export function createDeploymentOptionSection(configurationArg?: Array<any>, infoArg?: any, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDeploymentOptionSection();
result["info"] = infoArg;
result["required"] = requiredArg;
var items = result["configuration"];
for (var obj of configurationArg) {
	items.add(obj);
}
return result;
}
}
