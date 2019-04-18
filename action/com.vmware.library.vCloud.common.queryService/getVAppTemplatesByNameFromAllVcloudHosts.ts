/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.queryService {
export function getVAppTemplatesByNameFromAllVcloudHosts(name?: string): Array<vCloud.VAppTemplate> {if (name == null || name.length == 0) {
	return null;
}

var vcdHosts = com.vmware.library.vCloud.common.utils.getEnabledHosts();

var vAppTemplates = new Array();
for (var vcdHost of vcdHosts) {
	vAppTemplates = vAppTemplates.concat(com.vmware.library.vCloud.common.queryService.getVAppTemplatesByName(vcdHost,name));
}
return vAppTemplates;
}
}
