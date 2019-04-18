/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getTechnischBeheerNames(): Array<string> {var tools = be.itq.package.tools;
var ce = tools.getConfigurationElement("TechnischBeheer");

return tools.getKeysFromConfigurationElement(ce);
}
}
