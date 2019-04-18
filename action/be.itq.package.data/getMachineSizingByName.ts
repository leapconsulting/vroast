/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getMachineSizingByName(sizeName?: string): any {var tools = be.itq.package.tools;

var configurationElementName = "Sizes";

var configurationElement = tools.getConfigurationElement(configurationElementName);
var size = tools.getArrayFromConfigurationElement(configurationElement,sizeName);

return size;

}
}
