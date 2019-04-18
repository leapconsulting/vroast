/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.ovf.vmware {
export function createIpAssignmentSection(infoArg?: any, protocolsArg?: string, requiredArg?: boolean, schemesArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclIpAssignmentSection();
result["info"] = infoArg;
result["protocols"] = protocolsArg;
result["required"] = requiredArg;
result["schemes"] = schemesArg;
return result;
}
}
