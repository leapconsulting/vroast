/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgPasswordPolicySettings(accountLockoutEnabledArg?: boolean, accountLockoutIntervalMinutesArg?: number, invalidLoginsBeforeLockoutArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgPasswordPolicySettings();
result["accountLockoutEnabled"] = accountLockoutEnabledArg;
result["invalidLoginsBeforeLockout"] = invalidLoginsBeforeLockoutArg;
result["accountLockoutIntervalMinutes"] = accountLockoutIntervalMinutesArg;
return result;
}
}
