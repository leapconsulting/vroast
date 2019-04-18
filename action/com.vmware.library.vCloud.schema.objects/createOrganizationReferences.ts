/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createOrganizationReferences(organizationReferenceArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclOrganizationReferences();
var items = result["organizationReference"];
for (var obj of organizationReferenceArg) {
	items.add(obj);
}
return result;
}
}
