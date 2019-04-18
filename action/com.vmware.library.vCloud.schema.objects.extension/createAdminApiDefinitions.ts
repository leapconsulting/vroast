/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects.extension {
export function createAdminApiDefinitions(apiDefinitionArg?: Array<any>): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminApiDefinitions();
var items = result["apiDefinition"];
for (var obj of apiDefinitionArg) {
	items.add(obj);
}
return result;
}
}
