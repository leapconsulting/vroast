/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.edge.nat.dto {
export function modifyNatConfig(targetEntityArg?: any, enabledArg?: boolean, rulesArg?: any, templateArg?: string, versionArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
if (versionArg != null) {
	targetEntityArg["version"] = versionArg;
}
if (rulesArg != null) {
	targetEntityArg["rules"] = rulesArg;
}
if (enabledArg != null) {
	targetEntityArg["enabled"] = enabledArg;
}
if (templateArg != null) {
	targetEntityArg["template"] = templateArg;
}
return targetEntityArg;
}
}
