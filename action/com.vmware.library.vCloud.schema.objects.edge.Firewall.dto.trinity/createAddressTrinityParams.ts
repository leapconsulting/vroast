/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.edge.Firewall.dto.trinity {
export function createAddressTrinityParams(excludeArg?: boolean, groupingObjectIdArg?: Array<string>, ipAddressArg?: Array<string>, vnicGroupIdArg?: Array<string>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAddressTrinityParams();
var items = result["ipAddress"];
for (var obj of ipAddressArg) {
	items.add(obj);
}
var items = result["groupingObjectId"];
for (var obj of groupingObjectIdArg) {
	items.add(obj);
}
var items = result["vnicGroupId"];
for (var obj of vnicGroupIdArg) {
	items.add(obj);
}
result["exclude"] = excludeArg;
return result;
}
}
