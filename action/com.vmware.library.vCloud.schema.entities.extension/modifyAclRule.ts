/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyAclRule(targetEntityArg?: vCloud.AdminAclRule, descriptionArg?: string, nameArg?: string, operationKeyArg?: string, organizationAccessArg?: any, principalAccessArg?: any, serviceResourceAccessArg?: any): vCloud.AdminAclRule {// WARNING: Auto generated code. Please, do not edit this code.
if (serviceResourceAccessArg != null) {
	targetEntityArg["serviceResourceAccess"] = serviceResourceAccessArg;
}
if (organizationAccessArg != null) {
	targetEntityArg["organizationAccess"] = organizationAccessArg;
}
if (principalAccessArg != null) {
	targetEntityArg["principalAccess"] = principalAccessArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
