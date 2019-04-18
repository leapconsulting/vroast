/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createVAppNetworkConfigurationNone(): any {var config = new VclVAppNetworkConfiguration();
config.href = null;
config.type = null;
config.networkName = "none";
config.description = "This is a special place-holder used for disconnected network interfaces.";
config.isDeployed = false;

var configuration = new VclNetworkConfiguration();
configuration.ipScope = new VclIpScope();
configuration.ipScope.isInherited = false;
configuration.ipScope.gateway = "196.254.254.254";
configuration.ipScope.netmask = "255.255.0.0";
configuration.ipScope.dns1 = "196.254.254.254";
configuration.fenceMode = VclFenceModeValuesType.ISOLATED;

config.configuration = configuration;

return config;

}
}
