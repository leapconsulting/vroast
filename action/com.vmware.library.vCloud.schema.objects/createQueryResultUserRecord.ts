/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultUserRecord(deployedVMQuotaArg?: number, fullNameArg?: string, identityProviderTypeArg?: string, isEnabledArg?: boolean, isLdapUserArg?: boolean, metadataArg?: any, nameArg?: string, numberOfDeployedVMsArg?: number, numberOfStoredVMsArg?: number, storedVMQuotaArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultUserRecord();
result["fullName"] = fullNameArg;
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["deployedVMQuota"] = deployedVMQuotaArg;
result["storedVMQuota"] = storedVMQuotaArg;
result["identityProviderType"] = identityProviderTypeArg;
result["isLdapUser"] = isLdapUserArg;
result["numberOfDeployedVMs"] = numberOfDeployedVMsArg;
result["numberOfStoredVMs"] = numberOfStoredVMsArg;
result["name"] = nameArg;
return result;
}
}
