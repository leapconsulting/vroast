/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.ad {
export function getHost(): AD.AdHost {var hosts = AD_HostManager.findAllHosts();

if (hosts.length > 1) {
	throw "More than 1 AD host found!"
}
if (hosts.length == 0) {
	throw "No AD host found!"
}

return hosts[0];
}
}
