/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
export function createApplicationTrinityParams(applicationIdArg?: Array<string>, serviceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclApplicationTrinityParams();
var items = result["service"];
for (var obj of serviceArg) {
	items.add(obj);
}
var items = result["applicationId"];
for (var obj of applicationIdArg) {
	items.add(obj);
}
return result;
}
}
