/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.nat.dto {
export function createNatConfigParams(enabledArg?: boolean, rulesArg?: any, templateArg?: string, versionArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNatConfigParams();
result["version"] = versionArg;
result["rules"] = rulesArg;
result["enabled"] = enabledArg;
result["template"] = templateArg;
return result;
}
}
