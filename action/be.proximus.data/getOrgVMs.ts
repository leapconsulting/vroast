/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getOrgVMs(tenantRef?: string): Array<vCloud.VM> {var dataModule = be.proximus.data;
var host = dataModule.getOrganization(tenantRef,"VCD");
host.login();
var org = host.getOrganizations();

var allVapps = org[0].getVdcs()[0].sort();
allVapps = allVapps.getVApps();
var vms;
var allVm = new Array(); 
for (var vapp of allVapps){
	System.log(vapp.name);
	vms = vapp.getChildrenVms();
	for (var vm of vms){
		System.log("vm name " + vm.name);
		allVm.push(vm);
	}
	
}
host.logout();
return vms;


}
}
