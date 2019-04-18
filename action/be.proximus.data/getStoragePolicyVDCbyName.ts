/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getStoragePolicyVDCbyName(tenantRef?: string): Array<string> {var dataModule = be.proximus.data;
var host = dataModule.getOrganization(tenantRef,"VCD");
host.login();
var vdc = host.getOrganizations()[0].getVdcs().sort();
var storageProfiles = com.vmware.library.vCloud.operation.getStorageProfilesVdc(vdc[0]);

var sp = new Array();
for (var storageProfile of storageProfiles){
	System.log(storageProfile.name);
	if(storageProfile.name.indexOf("Storage") > -1 && storageProfile.name.indexOf("Independent") == -1 ){
		sp.push(storageProfile.name);
		sp.sort();
	}
};

host.logout();
return sp;


}
}
