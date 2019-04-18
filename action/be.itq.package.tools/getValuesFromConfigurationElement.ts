/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.tools {
export function getValuesFromConfigurationElement(configurationElement?: ConfigurationElement): Array<any> {var attributes = configurationElement.attributes;

var values = attributes.map(function(attribute) {
	return attribute.value;
});

return values;

}
}
