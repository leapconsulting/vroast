/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getStoragePolicyVDCbyNameForID(targetEntityArg?: vCloud.Vdc): Array<string> {var storageProfiles = com.vmware.library.vCloud.operation.getStorageProfilesVdc(targetEntityArg);

var sp = new Array();
for (var storageProfile of storageProfiles){
	System.log(storageProfile.name);
//	if(storageProfile.name.indexOf("Storage") > -1 && storageProfile.name.indexOf("Independent") > -1 ){
	if(storageProfile.name.indexOf("Tier") > -1 && storageProfile.name.indexOf("Independent") > -1 ){
		sp.push(storageProfile.name);
		sp.sort();
	}
};
return sp;


}
}
