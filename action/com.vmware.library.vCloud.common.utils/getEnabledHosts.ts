/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function getEnabledHosts(): Array<vCloud.Host> {var allHosts = VclHostManager.getHostList();
var enabledHosts = new Array();

for (var host of allHosts) {
	if 	(host.enabled) {
		enabledHosts.push(host);
		host.login();
	}
}

return enabledHosts;
}
}
