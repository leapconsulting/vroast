/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getHostForTenant(tenantName?: string): vCACCAFE.VCACHost {System.log("getHostForTenant in ");
var allHosts = Server.findAllForType("vCACCAFE:VCACHost");

return allHosts.filter(function(host) {
	System.log("getHostForTenant out " + host.name + " " + host.tenant);
	return host.tenant == tenantName && host.name != "Default";
})[0];
}
}
