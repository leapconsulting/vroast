/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function listVDCNetworkByName(tenantRef?: string): Array<string> {var dataModule = be.proximus.data;
var host = dataModule.getOrganization(tenantRef,"VCD");
host.login();
var vdcs = host.getOrganizations()[0].getVdcs().sort();

var allNetworks = vdcs[0].getOrgVdcNetworks();
host.logout();
return allNetworks.map(function(network){
	return network.name;

});


}
}
