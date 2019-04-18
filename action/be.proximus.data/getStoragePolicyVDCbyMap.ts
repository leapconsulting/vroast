/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.data {
export function getStoragePolicyVDCbyMap(targetEntityArg?: vCloud.Vdc, storageProfileName?: string): Array<vCloud.VdcStorageProfile> {var vra = be.itq.package.vra

var storageProfiles = com.vmware.library.vCloud.operation.getStorageProfilesVdc(targetEntityArg);

return storageProfiles.filter(function(sp) {
	return sp.name == storageProfileName;
}).map(function(sp) {
	return sp;
})[0];
}
}
