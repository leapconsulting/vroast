/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAclRuleRecord(metadataArg?: any, nameArg?: string, orgArg?: string, orgAccessArg?: string, principalArg?: string, principalAccessArg?: string, principalTypeArg?: string, resourceClassActionArg?: string, serviceResourceArg?: string, serviceResourceAccessArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAclRuleRecord();
result["org"] = orgArg;
result["serviceResourceAccess"] = serviceResourceAccessArg;
result["principalAccess"] = principalAccessArg;
result["serviceResource"] = serviceResourceArg;
result["metadata"] = metadataArg;
result["resourceClassAction"] = resourceClassActionArg;
result["orgAccess"] = orgAccessArg;
result["principal"] = principalArg;
result["principalType"] = principalTypeArg;
result["name"] = nameArg;
return result;
}
}
