/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createNetworkMapping(sourceArg?: string, targetArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclNetworkMapping();
result["source"] = sourceArg;
result["target"] = targetArg;
return result;
}
}
