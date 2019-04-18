/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgLdapSettings(customOrgLdapSettingsArg?: any, customUsersOuArg?: string, orgLdapModeArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgLdapSettings();
result["customUsersOu"] = customUsersOuArg;
result["customOrgLdapSettings"] = customOrgLdapSettingsArg;
result["orgLdapMode"] = orgLdapModeArg;
return result;
}
}
