/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function createVAppNetworkConfiguration(href?: string, type?: string, configuration?: any, description?: string, isDeployed?: boolean, networkName?: string): any {var config = new VclVAppNetworkConfiguration();
config.href = href;
//config.type = type;
//config.configuration = configuration;
//config.description = description;
//config.isDeployed = isDeployed;
//config.networkName = networkName;
return config;
}
}
