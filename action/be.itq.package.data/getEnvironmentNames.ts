/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getEnvironmentNames(): Array<string> {var tools = be.itq.package.tools;
var ce = tools.getConfigurationElement("Environments");

return tools.getKeysFromConfigurationElement(ce);
}
}
