/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getActiveDirectoryByEnvironment(environment?: string): any {var tools = be.itq.package.tools;

var configurationElementName = "ActiveDirectory";

var configurationElement = tools.getConfigurationElement(configurationElementName);

var activeDirectories = tools.getArrayFromConfigurationElement(configurationElement,"ad");

var activeDirectoryFound = activeDirectories.filter(function(activeDirectory) {
	return activeDirectory.Environment == environment;
});

var ad;
if (activeDirectoryFound.length != 1) {
	throw "Zero or multiple activeDirectories found."
} else {
	ad = activeDirectoryFound[0];
}

return ad;
}
}
