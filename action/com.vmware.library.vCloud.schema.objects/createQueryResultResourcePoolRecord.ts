/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultResourcePoolRecord(isDeletedArg?: boolean, metadataArg?: any, morefArg?: string, nameArg?: string, vcArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultResourcePoolRecord();
result["metadata"] = metadataArg;
result["isDeleted"] = isDeletedArg;
result["vc"] = vcArg;
result["vcName"] = vcNameArg;
result["moref"] = morefArg;
result["name"] = nameArg;
return result;
}
}
