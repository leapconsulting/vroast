/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getDatacenterNames(): Array<string> {var tools = be.itq.package.tools;
var ce = tools.getConfigurationElement("Datacenters");

return tools.getValuesFromConfigurationElement(ce);
}
}
