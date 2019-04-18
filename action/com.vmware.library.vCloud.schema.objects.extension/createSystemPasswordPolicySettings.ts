/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createSystemPasswordPolicySettings(accountLockoutEnabledArg?: boolean, accountLockoutIntervalMinutesArg?: number, adminAccountLockoutEnabledArg?: boolean, invalidLoginsBeforeLockoutArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSystemPasswordPolicySettings();
result["accountLockoutEnabled"] = accountLockoutEnabledArg;
result["adminAccountLockoutEnabled"] = adminAccountLockoutEnabledArg;
result["invalidLoginsBeforeLockout"] = invalidLoginsBeforeLockoutArg;
result["accountLockoutIntervalMinutes"] = accountLockoutIntervalMinutesArg;
return result;
}
}
