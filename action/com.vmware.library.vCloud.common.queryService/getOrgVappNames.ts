/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getOrgVappNames(organization?: vCloud.Organization): Array<string> {var vdcs = com.vmware.library.vCloud.common.queryService.getOrgVdcs(organization) ;

var vAppNames = new Array;
for (var vdc of vdcs) {
	vAppNames = vAppNames.concat(com.vmware.library.vCloud.common.queryService.getVdcVAppNames(vdc));
}

return vAppNames;
}
}
