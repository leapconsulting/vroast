/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
export function createBootOrderSection(infoArg?: any, instanceIdArg?: number, requiredArg?: boolean): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclBootOrderSection();
result["info"] = infoArg;
result["instanceId"] = instanceIdArg;
result["required"] = requiredArg;
return result;
}
}
