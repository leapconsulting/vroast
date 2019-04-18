/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp Template {
export function listVAppTemplateNetworks(vAppTemplate?: vCloud.VAppTemplate): Array<string> {var networkConfigSection = vAppTemplate.getNetworkConfigSection();
if (networkConfigSection == null) {
	var emptyArray = new Array();
	return emptyArray;
}

var allNetworks = networkConfigSection.networkConfig.enumerate();
var networkList = new Array(allNetworks.length);
for (var var index = 0; index < allNetworks.length; index++) {
	var networkName = allNetworks[index].networkName;
	networkList[index] = networkName;
}
return networkList;

}
}
