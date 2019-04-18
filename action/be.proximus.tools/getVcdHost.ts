/// <reference path="./../../includes.d.ts"/>

namespace be.proximus.tools {
export function getVcdHost(): Array<vCloud.VApp> {var ceCategory = Server.getConfigurationElementCategoryWithPath("Proximus");
var configurationElements = ceCategory.configurationElements;


System.log(configurationElements);
var configuration = configurationElements.filter(function(configurationElement) {
	return configurationElement.name ==  "vcdHost" ;
})[0];

return (configuration.getAttributeWithKey("vcdHost").value);

}
}
