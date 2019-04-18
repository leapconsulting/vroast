/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultDvSwitchRecord(isVCEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, vcArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultDvSwitchRecord();
result["metadata"] = metadataArg;
result["vc"] = vcArg;
result["vcName"] = vcNameArg;
result["moref"] = morefArg;
result["isVCEnabled"] = isVCEnabledArg;
result["name"] = nameArg;
return result;
}
}
