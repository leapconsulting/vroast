/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getVraEnvironment(): void {var tools = be.itq.package.tools

var configElement = tools.getConfigurationElement("environment");

var attribute = configElement.getAttributeWithKey("currentEnvironment");

return attribute.value;
}
}
