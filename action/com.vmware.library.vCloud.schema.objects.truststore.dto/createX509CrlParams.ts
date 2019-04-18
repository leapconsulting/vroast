/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
export function createX509CrlParams(issuerArg?: string, nextUpdateArg?: string, versionArg?: string, x509CrlEntriesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclX509CrlParams();
result["version"] = versionArg;
result["nextUpdate"] = nextUpdateArg;
result["issuer"] = issuerArg;
var items = result["x509CrlEntries"];
for (var obj of x509CrlEntriesArg) {
	items.add(obj);
}
return result;
}
}
