/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyUser(targetEntityArg?: vCloud.User, alertEmailArg?: string, alertEmailPrefixArg?: string, deployedVmQuotaArg?: number, descriptionArg?: string, emailAddressArg?: string, fullNameArg?: string, groupReferencesArg?: any, iMArg?: string, isAlertEnabledArg?: boolean, isDefaultCachedArg?: boolean, isEnabledArg?: boolean, isExternalArg?: boolean, isGroupRoleArg?: boolean, isLockedArg?: boolean, nameArg?: string, nameInSourceArg?: string, operationKeyArg?: string, passwordArg?: string, providerTypeArg?: string, roleArg?: any, storedVmQuotaArg?: number, telephoneArg?: string): vCloud.User {// WARNING: Auto generated code. Please, do not edit this code.
if (isLockedArg != null) {
	targetEntityArg["isLocked"] = isLockedArg;
}
if (iMArg != null) {
	targetEntityArg["iM"] = iMArg;
}
if (nameInSourceArg != null) {
	targetEntityArg["nameInSource"] = nameInSourceArg;
}
if (isAlertEnabledArg != null) {
	targetEntityArg["isAlertEnabled"] = isAlertEnabledArg;
}
if (alertEmailPrefixArg != null) {
	targetEntityArg["alertEmailPrefix"] = alertEmailPrefixArg;
}
if (alertEmailArg != null) {
	targetEntityArg["alertEmail"] = alertEmailArg;
}
if (isExternalArg != null) {
	targetEntityArg["isExternal"] = isExternalArg;
}
if (providerTypeArg != null) {
	targetEntityArg["providerType"] = providerTypeArg;
}
if (isDefaultCachedArg != null) {
	targetEntityArg["isDefaultCached"] = isDefaultCachedArg;
}
if (isGroupRoleArg != null) {
	targetEntityArg["isGroupRole"] = isGroupRoleArg;
}
if (storedVmQuotaArg != null) {
	targetEntityArg["storedVmQuota"] = storedVmQuotaArg;
}
if (deployedVmQuotaArg != null) {
	targetEntityArg["deployedVmQuota"] = deployedVmQuotaArg;
}
if (groupReferencesArg != null) {
	targetEntityArg["groupReferences"] = groupReferencesArg;
}
if (passwordArg != null) {
	targetEntityArg["password"] = passwordArg;
}
if (fullNameArg != null) {
	targetEntityArg["fullName"] = fullNameArg;
}
if (isEnabledArg != null) {
	targetEntityArg["isEnabled"] = isEnabledArg;
}
if (emailAddressArg != null) {
	targetEntityArg["emailAddress"] = emailAddressArg;
}
if (telephoneArg != null) {
	targetEntityArg["telephone"] = telephoneArg;
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
if (roleArg != null) {
	if (roleArg instanceof VclReference) {
	    targetEntityArg["role"] = roleArg;
	} else {
	    targetEntityArg["role"] = roleArg.getReference();
	}
}
return targetEntityArg;
}
}
