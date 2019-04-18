/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createContainer(nameArg?: string, pageArg?: number, pageSizeArg?: number, totalArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclContainer();
result["total"] = totalArg;
result["page"] = pageArg;
result["pageSize"] = pageSizeArg;
result["name"] = nameArg;
return result;
}
}
