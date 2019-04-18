/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createSystemSettings(amqpSettingsArg?: any, blockingTaskSettingsArg?: any, brandingSettingsArg?: any, catalogSettingsArg?: any, emailSettingsArg?: any, generalSettingsArg?: any, kerberosSettingsArg?: any, ldapSettingsArg?: any, licenseArg?: any, lookupServiceSettingsArg?: any, notificationsSettingsArg?: any, passwordPolicySettingsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSystemSettings();
result["blockingTaskSettings"] = blockingTaskSettingsArg;
result["passwordPolicySettings"] = passwordPolicySettingsArg;
result["kerberosSettings"] = kerberosSettingsArg;
result["lookupServiceSettings"] = lookupServiceSettingsArg;
result["catalogSettings"] = catalogSettingsArg;
result["generalSettings"] = generalSettingsArg;
result["notificationsSettings"] = notificationsSettingsArg;
result["ldapSettings"] = ldapSettingsArg;
result["amqpSettings"] = amqpSettingsArg;
result["emailSettings"] = emailSettingsArg;
result["license"] = licenseArg;
result["brandingSettings"] = brandingSettingsArg;
return result;
}
}
