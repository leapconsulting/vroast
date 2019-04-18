/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppsByNameFromVdc(vAppName?: string, vdc?: vCloud.Vdc): Array<vCloud.VApp> {if (vdc == null) {
	throw "getVAppByNameFromVdc: vdc is null";
}
var vApp = com.vmware.library.vCloud.common.queryService.getVAppByNameFromVdc(vAppName, vdc); 
var vApps = com.vmware.library.vCloud.common.queryService.getVAppsByName(vdc.getHost(), vAppName + "-*");

if (vApp != null) {
	vApps.push(vApp);
}

var matchingVApps = new Array();
for (var vApp of vApps) {
	if (vApp.parent == vdc) {
		matchingVApps.push(vApp);
	}
}
return matchingVApps;
}
}
