/// <reference path="./../../includes.d.ts"/>

namespace be.itq.package.data {
export function getMaintenanceWindowNames(): Array<string> {var tools = be.itq.package.tools;
var ce = tools.getConfigurationElement("MaintenanceWindows");

return tools.getKeysFromConfigurationElement(ce);
}
}
