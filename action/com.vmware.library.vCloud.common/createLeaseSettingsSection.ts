/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createLeaseSettingsSection(deploymentLeaseType?: string, deploymentLeaseValue?: number, storageLeaseType?: string, storageLeaseValue?: number): any {var section = new VclLeaseSettingsSection();

section.info = new VclMsg();
section.info.value = "Lease Settings";

var leaseFactor = 60 * 60; // hours
if (deploymentLeaseType == "days") {
	leaseFactor = leaseFactor * 24;
}
section.deploymentLeaseInSeconds = deploymentLeaseValue * leaseFactor;

var storageFactor = 60 * 60; // hours
if (storageLeaseType == "days") {
	storageFactor = storageFactor * 24;
}
section.storageLeaseInSeconds = storageLeaseValue * storageFactor;

return section;
}
}
