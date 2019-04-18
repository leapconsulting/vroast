/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dto {
export function createFeatureConfigParams(enabledArg?: boolean, templateArg?: string, versionArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclFeatureConfigParams();
result["version"] = versionArg;
result["enabled"] = enabledArg;
result["template"] = templateArg;
return result;
}
}
