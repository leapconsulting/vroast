/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgGuestPersonalizationSettings(accountOrganizationalUnitArg?: string, allowDomainSettingsArg?: boolean, domainNameArg?: string, domainPasswordArg?: string, domainUsernameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgGuestPersonalizationSettings();
result["domainName"] = domainNameArg;
result["accountOrganizationalUnit"] = accountOrganizationalUnitArg;
result["domainUsername"] = domainUsernameArg;
result["domainPassword"] = domainPasswordArg;
result["allowDomainSettings"] = allowDomainSettingsArg;
return result;
}
}
