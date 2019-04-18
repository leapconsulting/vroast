/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultServiceRecord(metadataArg?: any, nameArg?: string, namespaceArg?: string, vendorArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultServiceRecord();
result["vendor"] = vendorArg;
result["metadata"] = metadataArg;
result["name"] = nameArg;
result["namespace"] = namespaceArg;
return result;
}
}
