/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrgAssociations(orgAssociationMemberArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrgAssociations();
var items = result["orgAssociationMember"];
for (var obj of orgAssociationMemberArg) {
	items.add(obj);
}
return result;
}
}
