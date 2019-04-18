/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp Template {
export function getNumVAppTemplateNetworks(vAppTemplate?: vCloud.VAppTemplate, max?: number): number {var networkConfigSection = vAppTemplate.getNetworkConfigSection();
if (networkConfigSection == null) return 0;

var allNetworks = networkConfigSection.networkConfig.enumerate();
if (allNetworks.length > max) return max;
return allNetworks.length;

}
}
