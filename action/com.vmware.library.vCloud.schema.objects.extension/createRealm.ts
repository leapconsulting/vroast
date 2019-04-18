/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createRealm(domainArg?: Array<string>, kdcArg?: string, nameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclRealm();
result["kdc"] = kdcArg;
result["name"] = nameArg;
var items = result["domain"];
for (var obj of domainArg) {
	items.add(obj);
}
return result;
}
}
