/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.truststore.dto {
export function createPrincipalParams(attributesArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclPrincipalParams();
var items = result["attributes"];
for (var obj of attributesArg) {
	items.add(obj);
}
return result;
}
}
