/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.tools {
export function getConfigurationElement(configurationElementName?: string): ConfigurationElement {var configurationElementCategory = Server.getConfigurationElementCategoryWithPath("Proximus");
var configurationElements = configurationElementCategory.allConfigurationElements;

var configurationElement = configurationElements.filter(function(configurationElement) {
	return configurationElement.name == configurationElementName;	
});

if (configurationElement.length == 1) {
	return configurationElement[0];
} else {
	throw "Found more than one configurationElement for search term: " + configurationElementName;
}

return null;
}
}
