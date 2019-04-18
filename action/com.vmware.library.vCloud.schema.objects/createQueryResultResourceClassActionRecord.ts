/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultResourceClassActionRecord(httpMethodArg?: string, metadataArg?: any, nameArg?: string, resourceClassArg?: string, urlPatternArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultResourceClassActionRecord();
result["urlPattern"] = urlPatternArg;
result["httpMethod"] = httpMethodArg;
result["resourceClass"] = resourceClassArg;
result["metadata"] = metadataArg;
result["name"] = nameArg;
return result;
}
}
