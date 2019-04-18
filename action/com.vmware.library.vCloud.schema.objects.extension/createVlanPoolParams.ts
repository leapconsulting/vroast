/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createVlanPoolParams(descriptionArg?: string, filesArg?: any, nameArg?: string, operationKeyArg?: string, promiscuousModeArg?: boolean, statusArg?: number, usedNetworksCountArg?: number, vimSwitchRefArg?: any, vlanRangeArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVlanPoolParams();
var items = result["vlanRange"];
for (var obj of vlanRangeArg) {
	items.add(obj);
}
result["vimSwitchRef"] = vimSwitchRefArg;
result["usedNetworksCount"] = usedNetworksCountArg;
result["promiscuousMode"] = promiscuousModeArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
