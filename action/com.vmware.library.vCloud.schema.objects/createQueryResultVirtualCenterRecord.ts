/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultVirtualCenterRecord(isBusyArg?: boolean, isEnabledArg?: boolean, isSupportedArg?: boolean, metadataArg?: any, nameArg?: string, statusArg?: string, urlArg?: string, userNameArg?: string, uuidArg?: string, vcVersionArg?: string, vsmIPArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultVirtualCenterRecord();
result["vcVersion"] = vcVersionArg;
result["uuid"] = uuidArg;
result["url"] = urlArg;
result["userName"] = userNameArg;
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["isBusy"] = isBusyArg;
result["isSupported"] = isSupportedArg;
result["vsmIP"] = vsmIPArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
