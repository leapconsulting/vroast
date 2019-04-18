/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultServiceResourceRecord(externalObjectIdArg?: string, metadataArg?: any, nameArg?: string, orgArg?: string, resourceClassArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultServiceResourceRecord();
result["org"] = orgArg;
result["externalObjectId"] = externalObjectIdArg;
result["resourceClass"] = resourceClassArg;
result["metadata"] = metadataArg;
result["name"] = nameArg;
return result;
}
}
