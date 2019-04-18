/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createRuntimeInfoSection(infoArg?: any, requiredArg?: boolean, vMWareToolsArg?: any): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRuntimeInfoSection();
result["info"] = infoArg;
result["required"] = requiredArg;
result["vMWareTools"] = vMWareToolsArg;
return result;
}
}
