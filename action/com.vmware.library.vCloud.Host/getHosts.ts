/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Host {
export function getHosts(): Array<vCloud.Host> {var hosts = VclHostManager.getHostList();
if (hosts != null) {
	for (var i = 0; i < hosts.length; i++) {
		hosts[i].login();
	}
}
return hosts;
}
}
