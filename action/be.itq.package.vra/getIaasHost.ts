/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.vra {
export function getIaasHost(): vCAC.VCACHost {var hosts = Server.findAllForType("vCAC:VCACHost");


if (hosts.length == 1) {
	return hosts[0];
} else {
	throw "Zero or multiple vRA IaaS hosts found."
}
return null;

}
}
