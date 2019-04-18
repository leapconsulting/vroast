/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getFunctioneelBeheerNames(): Array<string> {var tools = be.itq.package.tools;
var ce = tools.getConfigurationElement("FunctioneelBeheer");

return tools.getKeysFromConfigurationElement(ce);
}
}
