/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultResourceClassRecord(metadataArg?: any, mimeTypeArg?: string, nameArg?: string, nidArg?: string, serviceArg?: string, urlTemplateArg?: string, urnPatternArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultResourceClassRecord();
result["urnPattern"] = urnPatternArg;
result["nid"] = nidArg;
result["urlTemplate"] = urlTemplateArg;
result["metadata"] = metadataArg;
result["service"] = serviceArg;
result["name"] = nameArg;
result["mimeType"] = mimeTypeArg;
return result;
}
}
