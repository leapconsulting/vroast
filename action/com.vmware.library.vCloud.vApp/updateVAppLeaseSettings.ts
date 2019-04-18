/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function updateVAppLeaseSettings(vApp?: vCloud.VApp, deploymentLeaseValue?: number, deploymentLeaseType?: string, storageLeaseValue?: number, storageLeaseType?: string): vCloud.Task {var leaseSettingsSection = 
	com.vmware.library.vCloud.common.createLeaseSettingsSection(deploymentLeaseType,deploymentLeaseValue,storageLeaseType,storageLeaseValue);

return vApp.updateSection(leaseSettingsSection);

}
}
