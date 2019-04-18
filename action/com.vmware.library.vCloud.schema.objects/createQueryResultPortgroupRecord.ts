/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultPortgroupRecord(isVCEnabledArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, networkArg?: string, networkNameArg?: string, portgroupTypeArg?: string, scopeTypeArg?: number, vcArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultPortgroupRecord();
result["metadata"] = metadataArg;
result["vc"] = vcArg;
result["vcName"] = vcNameArg;
result["networkName"] = networkNameArg;
result["network"] = networkArg;
result["moref"] = morefArg;
result["isVCEnabled"] = isVCEnabledArg;
result["portgroupType"] = portgroupTypeArg;
result["scopeType"] = scopeTypeArg;
result["name"] = nameArg;
return result;
}
}
