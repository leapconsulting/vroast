/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppByNameFromVdc(vAppName?: string, vdc?: vCloud.Vdc): vCloud.VApp {var vApps = com.vmware.library.vCloud.common.queryService.getVAppsByName(vdc.getHost(), vAppName);

for (var vApp of vApps) {
	if (vApp.parent == vdc) {
		return vApp;
	}
}
return null;
}
}
