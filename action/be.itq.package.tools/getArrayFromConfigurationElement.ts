/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.tools {
export function getArrayFromConfigurationElement(configurationElement?: ConfigurationElement, arrayName?: string): Array<any> {if (!configurationElement) {
             throw "Could not find configuration element for path '" + path + "' and elementName '" + elementName + "'";
}

// Collect all properties and indices
var properties = [];
var indices = [];

for (var attribute of configurationElement.attributes) {
             var parts = attribute.name.split("-");
             if (parts.length == 3 && parts[0] == arrayName) {
                           if (properties.indexOf(parts[2]) < 0) {
                                        properties.push(parts[2]);
                           }
                           
                           indices.push(parseInt(parts[1]));
             }
}

var result = [];
for (var i = 0; i <= Math.max.apply(null, indices); ++i) {
             var entry = {};
             
             for (var property of properties) {
                           var key = [arrayName, i, property].join("-");
                           var attribute = configurationElement.getAttributeWithKey(key);
             
                           if (attribute) {
                                        entry[property] = attribute.value;
                           }
             }
             
             result.push(entry);
}

return result;

}
}
