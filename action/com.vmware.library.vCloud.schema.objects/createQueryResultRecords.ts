/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultRecords(nameArg?: string, pageArg?: number, pageSizeArg?: number, recordArg?: Array<any>, totalArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultRecords();
result["total"] = totalArg;
result["page"] = pageArg;
result["pageSize"] = pageSizeArg;
var items = result["record"];
for (var obj of recordArg) {
	items.add(obj);
}
result["name"] = nameArg;
return result;
}
}
