/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminGroupRecord(identityProviderTypeArg?: string, isReadOnlyArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, roleNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminGroupRecord();
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["identityProviderType"] = identityProviderTypeArg;
result["roleName"] = roleNameArg;
result["isReadOnly"] = isReadOnlyArg;
result["name"] = nameArg;
return result;
}
}
