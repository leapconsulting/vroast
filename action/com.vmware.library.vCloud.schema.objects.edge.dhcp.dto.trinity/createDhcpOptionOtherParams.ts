/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.dhcp.dto.trinity {
export function createDhcpOptionOtherParams(codeArg?: string, valueArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclDhcpOptionOtherParams();
result["value"] = valueArg;
result["code"] = codeArg;
return result;
}
}
