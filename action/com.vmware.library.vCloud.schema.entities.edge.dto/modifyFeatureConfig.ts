/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.edge.dto {
export function modifyFeatureConfig(targetEntityArg?: any, enabledArg?: boolean, templateArg?: string, versionArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
if (versionArg != null) {
	targetEntityArg["version"] = versionArg;
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
