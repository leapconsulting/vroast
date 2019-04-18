/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminUserRecord(deployedVMQuotaArg?: number, deployedVMQuotaRankArg?: number, fullNameArg?: string, identityProviderTypeArg?: string, isEnabledArg?: boolean, isLdapUserArg?: boolean, metadataArg?: any, nameArg?: string, numberOfDeployedVMsArg?: number, numberOfStoredVMsArg?: number, orgArg?: string, storedVMQuotaArg?: number, storedVMQuotaRankArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminUserRecord();
result["org"] = orgArg;
result["fullName"] = fullNameArg;
result["metadata"] = metadataArg;
result["isEnabled"] = isEnabledArg;
result["deployedVMQuota"] = deployedVMQuotaArg;
result["storedVMQuota"] = storedVMQuotaArg;
result["identityProviderType"] = identityProviderTypeArg;
result["isLdapUser"] = isLdapUserArg;
result["numberOfDeployedVMs"] = numberOfDeployedVMsArg;
result["numberOfStoredVMs"] = numberOfStoredVMsArg;
result["storedVMQuotaRank"] = storedVMQuotaRankArg;
result["deployedVMQuotaRank"] = deployedVMQuotaRankArg;
result["name"] = nameArg;
return result;
}
}
