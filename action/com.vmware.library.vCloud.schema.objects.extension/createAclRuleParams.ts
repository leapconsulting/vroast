/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAclRuleParams(descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationAccessArg?: any, principalAccessArg?: any, serviceResourceAccessArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAclRuleParams();
result["serviceResourceAccess"] = serviceResourceAccessArg;
result["organizationAccess"] = organizationAccessArg;
result["principalAccess"] = principalAccessArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
