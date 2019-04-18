/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createFencePoolParams(descriptionArg?: string, fenceIdCountArg?: number, filesArg?: any, mtuArg?: number, nameArg?: string, operationKeyArg?: string, promiscuousModeArg?: boolean, statusArg?: number, usedNetworksCountArg?: number, vimSwitchRefArg?: any, vlanIdArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFencePoolParams();
result["vimSwitchRef"] = vimSwitchRefArg;
result["usedNetworksCount"] = usedNetworksCountArg;
result["promiscuousMode"] = promiscuousModeArg;
result["fenceIdCount"] = fenceIdCountArg;
result["vlanId"] = vlanIdArg;
result["mtu"] = mtuArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
result["status"] = statusArg;
result["files"] = filesArg;
return result;
}
}
