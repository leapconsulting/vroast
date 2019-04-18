/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function getHostsWithSystemOrganization(): Array<vCloud.Host> {var enabledHostsWithSystemOrganization = new Array();
var hosts = VclHostManager.getHostList();
if (hosts != null) {
	for (var host of hosts) {
		if (host.enabled == true && host.organization.toLowerCase() == "system") {
			host.login();
			enabledHostsWithSystemOrganization.push(host);
		}
	}
}

return enabledHostsWithSystemOrganization;
}
}
