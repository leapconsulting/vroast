/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createSmtpSettings(passwordArg?: string, smtpServerNameArg?: string, smtpServerPortArg?: number, sslArg?: boolean, useAuthenticationArg?: boolean, userNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSmtpSettings();
result["ssl"] = sslArg;
result["password"] = passwordArg;
result["useAuthentication"] = useAuthenticationArg;
result["smtpServerName"] = smtpServerNameArg;
result["userName"] = userNameArg;
result["smtpServerPort"] = smtpServerPortArg;
return result;
}
}
