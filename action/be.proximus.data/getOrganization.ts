/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getOrganization(tenantRef?: string, app?: string): any {if (app == "VCD"){
	var hosts = VclHostManager.getHostList();
	for (var i = 0 ; i<hosts.length;i++){
		System.log(hosts[i].name);
		System.log(hosts[i].url);
		if (hosts[i].name.indexOf(tenantRef)> 0){	
			return hosts[i];
		}
	}
}

return null;
}
}
