/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.tools {
export function getKeysFromConfigurationElement(configurationElement?: ConfigurationElement): Array<string> {var attributes = configurationElement.attributes;

var keys = attributes.map(function(attribute) {
	return attribute.name;
});

return keys;

}
}
