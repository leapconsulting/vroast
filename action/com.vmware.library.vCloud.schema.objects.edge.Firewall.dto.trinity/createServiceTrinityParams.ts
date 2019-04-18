/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
export function createServiceTrinityParams(icmpTypeArg?: string, portArg?: Array<string>, protocolArg?: string, sourcePortArg?: Array<string>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclServiceTrinityParams();
var items = result["sourcePort"];
for (var obj of sourcePortArg) {
	items.add(obj);
}
result["protocol"] = protocolArg;
var items = result["port"];
for (var obj of portArg) {
	items.add(obj);
}
result["icmpType"] = icmpTypeArg;
return result;
}
}
