/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getDatacenterByShortCode(environment?: string, datacenterShortCode?: string): any {var tools = be.itq.package.tools;

var datacenterConfigElementName = "DC-" + environment;

var configurationElement = tools.getConfigurationElement(datacenterConfigElementName)
var datacenters = tools.getArrayFromConfigurationElement(configurationElement,"datacenter");

var datacenterFound = datacenters.filter(function(datacenter) {
	return datacenter.Shortcode == datacenterShortCode;
});

var datacenter;
if (datacenterFound.length != 1) {
	throw "Zero or multiple datacenters found."
} else {
	datacenter = datacenterFound[0];
}

return datacenter;
}
}
