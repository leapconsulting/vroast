/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createGuestCustomizationSection(adminAutoLogonCountArg?: number, adminAutoLogonEnabledArg?: boolean, adminPasswordArg?: string, adminPasswordAutoArg?: boolean, adminPasswordEnabledArg?: boolean, changeSidArg?: boolean, computerNameArg?: string, customizationScriptArg?: string, domainNameArg?: string, domainUserNameArg?: string, domainUserPasswordArg?: string, enabledArg?: boolean, infoArg?: any, joinDomainEnabledArg?: boolean, machineObjectOUArg?: string, requiredArg?: boolean, resetPasswordRequiredArg?: boolean, useOrgSettingsArg?: boolean, virtualMachineIdArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclGuestCustomizationSection();
result["info"] = infoArg;
result["enabled"] = enabledArg;
result["machineObjectOU"] = machineObjectOUArg;
result["changeSid"] = changeSidArg;
result["adminPasswordEnabled"] = adminPasswordEnabledArg;
result["adminPasswordAuto"] = adminPasswordAutoArg;
result["adminAutoLogonEnabled"] = adminAutoLogonEnabledArg;
result["adminAutoLogonCount"] = adminAutoLogonCountArg;
result["resetPasswordRequired"] = resetPasswordRequiredArg;
result["customizationScript"] = customizationScriptArg;
result["joinDomainEnabled"] = joinDomainEnabledArg;
result["computerName"] = computerNameArg;
result["required"] = requiredArg;
result["domainName"] = domainNameArg;
result["domainUserName"] = domainUserNameArg;
result["useOrgSettings"] = useOrgSettingsArg;
result["domainUserPassword"] = domainUserPasswordArg;
result["adminPassword"] = adminPasswordArg;
result["virtualMachineId"] = virtualMachineIdArg;
return result;
}
}
