/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getDhcpByEnvironment(environment?: string): any {var tools = be.itq.package.tools;

var configurationElementName = "DHCP";

var configurationElement = tools.getConfigurationElement(configurationElementName);

var dhcps = tools.getArrayFromConfigurationElement(configurationElement,"dhcp");

var dhcpFound = dhcps.filter(function(dhcp) {
	return dhcp.environment == environment;
});

var dhcp;
if (dhcpFound.length != 1) {
	throw "Zero or multiple DHCP configs found."
} else {
	dhcp = dhcpFound[0];
}

return dhcp;
}
}
