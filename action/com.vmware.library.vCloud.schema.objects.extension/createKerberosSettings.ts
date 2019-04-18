/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createKerberosSettings(allowLowerCaseRealmsArg?: boolean, realmArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclKerberosSettings();
result["allowLowerCaseRealms"] = allowLowerCaseRealmsArg;
var items = result["realm"];
for (var obj of realmArg) {
	items.add(obj);
}
return result;
}
}
