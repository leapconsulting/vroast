/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createControlAccessParams(accessSettingsArg?: any, everyoneAccessLevelArg?: string, isSharedToEveryoneArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclControlAccessParams();
result["isSharedToEveryone"] = isSharedToEveryoneArg;
result["everyoneAccessLevel"] = everyoneAccessLevelArg;
result["accessSettings"] = accessSettingsArg;
return result;
}
}
