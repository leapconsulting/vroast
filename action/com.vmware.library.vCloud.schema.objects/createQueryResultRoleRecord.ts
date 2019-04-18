/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultRoleRecord(isReadOnlyArg?: boolean, metadataArg?: any, nameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultRoleRecord();
result["metadata"] = metadataArg;
result["isReadOnly"] = isReadOnlyArg;
result["name"] = nameArg;
return result;
}
}
