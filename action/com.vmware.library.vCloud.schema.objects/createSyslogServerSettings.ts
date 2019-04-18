/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createSyslogServerSettings(syslogServerIp1Arg?: string, syslogServerIp2Arg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclSyslogServerSettings();
result["syslogServerIp1"] = syslogServerIp1Arg;
result["syslogServerIp2"] = syslogServerIp2Arg;
return result;
}
}
