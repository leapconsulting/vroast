/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createSyslogServerSettings(syslogServers?: Array<string>): any {var syslogServerSettings = new VclSyslogServerSettings();

if (syslogServers != null) {
	syslogServerSettings.syslogServerIp1 = syslogServers[0];
	syslogServerSettings.syslogServerIp2 = syslogServers[1];
}

return syslogServerSettings;
}
}
