/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createVmSelection(ipTypeArg?: string, vAppScopedVmIdArg?: string, vmNicIdArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclVmSelection();
result["vAppScopedVmId"] = vAppScopedVmIdArg;
result["vmNicId"] = vmNicIdArg;
result["ipType"] = ipTypeArg;
return result;
}
}
