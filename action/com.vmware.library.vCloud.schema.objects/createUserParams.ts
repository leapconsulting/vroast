/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createUserParams(alertEmailArg?: string, alertEmailPrefixArg?: string, deployedVmQuotaArg?: number, descriptionArg?: string, emailAddressArg?: string, fullNameArg?: string, groupReferencesArg?: any, iMArg?: string, isAlertEnabledArg?: boolean, isDefaultCachedArg?: boolean, isEnabledArg?: boolean, isExternalArg?: boolean, isGroupRoleArg?: boolean, isLockedArg?: boolean, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, passwordArg?: string, providerTypeArg?: string, roleArg?: any, storedVmQuotaArg?: number, telephoneArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclUserParams();
result["isLocked"] = isLockedArg;
result["iM"] = iMArg;
result["nameInSource"] = nameInSourceArg;
result["isAlertEnabled"] = isAlertEnabledArg;
result["alertEmailPrefix"] = alertEmailPrefixArg;
result["alertEmail"] = alertEmailArg;
result["isExternal"] = isExternalArg;
result["providerType"] = providerTypeArg;
result["isDefaultCached"] = isDefaultCachedArg;
result["isGroupRole"] = isGroupRoleArg;
result["storedVmQuota"] = storedVmQuotaArg;
result["deployedVmQuota"] = deployedVmQuotaArg;
result["groupReferences"] = groupReferencesArg;
result["password"] = passwordArg;
result["fullName"] = fullNameArg;
result["isEnabled"] = isEnabledArg;
result["emailAddress"] = emailAddressArg;
result["telephone"] = telephoneArg;
result["operationKey"] = operationKeyArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
if ((roleArg == null) || (roleArg instanceof VclReference)) {
	result["role"] = roleArg;
} else {
	result["role"] = roleArg.getReference();
}
return result;
}
}
