/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVxlanPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, promiscuousModeArg?: boolean, statusArg?: number, usedNetworksCountArg?: number, vdsContextsArg?: Array<any>, vimSwitchRefArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVxlanPoolParams();
result["vimSwitchRef"] = vimSwitchRefArg;
result["usedNetworksCount"] = usedNetworksCountArg;
result["promiscuousMode"] = promiscuousModeArg;
result["operationKey"] = operationKeyArg;
var items = result["vdsContexts"];
for (var obj of vdsContextsArg) {
	items.add(obj);
}
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
