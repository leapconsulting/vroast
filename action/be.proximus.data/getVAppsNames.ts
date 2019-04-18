/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getVAppsNames(tenantRef?: string): Array<string> {var dataModule = be.proximus.data;
var host = dataModule.getOrganization(tenantRef,"VCD");
host.login();
var org = host.getOrganizations();


var vdcs = org[0].getVdcs().sort();
var mapName = new Array();

for (var vdc of vdcs) {
	vapps = vdc.getVApps();
	for (var vApp of vapps){
		mapName.push(vApp.name);
	}
}

host.logout();
return mapName;
}
}
