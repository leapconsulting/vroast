/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getNetworkByName(environmentName?: string, machineOmgeving?: string, datacenterShortCode?: string): any {var tools = be.itq.package.tools;

var networkConfigElementName = "Network-" + environmentName + "-" + datacenterShortCode;

var configurationElement = tools.getConfigurationElement(networkConfigElementName)
var networks = tools.getArrayFromConfigurationElement(configurationElement,"network");

var networkFound = networks.filter(function(network) {
	return network.Environment == machineOmgeving;
});

var network;
if (networkFound.length != 1) {
	throw "Zero or multiple networks found."
} else {
	network = networkFound[0];
}

return network;
}
}
