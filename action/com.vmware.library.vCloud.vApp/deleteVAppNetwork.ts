/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function deleteVAppNetwork(vappNetwork?: vCloud.VAppNetwork): vCloud.Task {var vapp = vappNetwork.parent;
var vappNetworkName = vappNetwork.name;
var recomposeVAppParams = new VclRecomposeVAppParams() ;
var instantiationParams = new VclInstantiationParams();
var existingNetworkConfigArray = vapp.getNetworkConfigSection().networkConfig.enumerate();
var networkConfigSection = new VclNetworkConfigSection();
networkConfigSection.info = com.vmware.library.vCloud.common.createOvfMsg(null,"NetworkConfigSection");

var found = false;

for (var index = 0; index < existingNetworkConfigArray.length; index++) {
	var networkConfig = existingNetworkConfigArray[index];
	if (found || networkConfig.networkName != vappNetworkName) {
		networkConfigSection.networkConfig.add(networkConfig);
	} else {
		found = true;
	}
}

if (!found) {
	throw 'Network "' + vappNetworkName + '" does not exist!';
}

instantiationParams.section.add(networkConfigSection);
recomposeVAppParams.instantiationParams = instantiationParams;
return vapp.recompose(recomposeVAppParams);

}
}
