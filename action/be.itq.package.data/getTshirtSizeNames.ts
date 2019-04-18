/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getTshirtSizeNames(): Array<string> {var tools = be.itq.package.tools;
var ce = tools.getConfigurationElement("TshirtSizes");

return tools.getKeysFromConfigurationElement(ce);
}
}
