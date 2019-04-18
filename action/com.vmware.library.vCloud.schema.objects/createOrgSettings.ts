/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgSettings(orgEmailSettingsArg?: any, orgFederationSettingsArg?: any, orgGeneralSettingsArg?: any, orgLdapSettingsArg?: any, orgOperationLimitsSettingsArg?: any, orgPasswordPolicySettingsArg?: any, vAppLeaseSettingsArg?: any, vAppTemplateLeaseSettingsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgSettings();
result["orgGeneralSettings"] = orgGeneralSettingsArg;
result["vAppLeaseSettings"] = vAppLeaseSettingsArg;
result["vAppTemplateLeaseSettings"] = vAppTemplateLeaseSettingsArg;
result["orgLdapSettings"] = orgLdapSettingsArg;
result["orgEmailSettings"] = orgEmailSettingsArg;
result["orgPasswordPolicySettings"] = orgPasswordPolicySettingsArg;
result["orgOperationLimitsSettings"] = orgOperationLimitsSettingsArg;
result["orgFederationSettings"] = orgFederationSettingsArg;
return result;
}
}
