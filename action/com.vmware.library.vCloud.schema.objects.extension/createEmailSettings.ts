/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createEmailSettings(alertEmailToArg?: string, alertEmailToAllAdminsArg?: boolean, emailSubjectPrefixArg?: string, senderEmailAddressArg?: string, smtpSettingsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclEmailSettings();
result["senderEmailAddress"] = senderEmailAddressArg;
result["emailSubjectPrefix"] = emailSubjectPrefixArg;
result["alertEmailToAllAdmins"] = alertEmailToAllAdminsArg;
result["alertEmailTo"] = alertEmailToArg;
result["smtpSettings"] = smtpSettingsArg;
return result;
}
}
