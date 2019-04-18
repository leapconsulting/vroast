/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getDnsByEnvironment(environment?: string): any {var tools = be.itq.package.tools;

var configurationElementName = "DNS";

var configurationElement = tools.getConfigurationElement(configurationElementName);

var dnsObjects = tools.getArrayFromConfigurationElement(configurationElement,"dns");

var dnsFound = dnsObjects.filter(function(dns) {
	return dns.environment == environment;
});

var dns;
if (dnsFound.length != 1) {
	throw "Zero or multiple DNS servers found."
} else {
	dns = dnsFound[0];
}

return dns;
}
}
