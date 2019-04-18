/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSmtpServerSettings(hostArg?: string, isUseAuthenticationArg?: boolean, passwordArg?: string, portArg?: number, usernameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSmtpServerSettings();
result["username"] = usernameArg;
result["password"] = passwordArg;
result["isUseAuthentication"] = isUseAuthenticationArg;
result["host"] = hostArg;
result["port"] = portArg;
return result;
}
}
