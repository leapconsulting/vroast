/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgEmailSettings(alertEmailToArg?: Array<string>, defaultSubjectPrefixArg?: string, fromEmailAddressArg?: string, isAlertEmailToAllAdminsArg?: boolean, isDefaultOrgEmailArg?: boolean, isDefaultSmtpServerArg?: boolean, smtpServerSettingsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgEmailSettings();
var items = result["alertEmailTo"];
for (var obj of alertEmailToArg) {
	items.add(obj);
}
result["isAlertEmailToAllAdmins"] = isAlertEmailToAllAdminsArg;
result["defaultSubjectPrefix"] = defaultSubjectPrefixArg;
result["isDefaultOrgEmail"] = isDefaultOrgEmailArg;
result["fromEmailAddress"] = fromEmailAddressArg;
result["smtpServerSettings"] = smtpServerSettingsArg;
result["isDefaultSmtpServer"] = isDefaultSmtpServerArg;
return result;
}
}
