/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultApiFilterRecord(metadataArg?: any, serviceArg?: string, urlPatternArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultApiFilterRecord();
result["urlPattern"] = urlPatternArg;
result["metadata"] = metadataArg;
result["service"] = serviceArg;
return result;
}
}
