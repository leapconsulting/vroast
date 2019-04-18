/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createCatalogItemParams(dateCreatedArg?: any, descriptionArg?: string, entityArg?: any, nameArg?: string, operationKeyArg?: string, propertyArg?: Array<any>, sizeArg?: number, versionNumberArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclCatalogItemParams();
result["operationKey"] = operationKeyArg;
result["dateCreated"] = dateCreatedArg;
result["versionNumber"] = versionNumberArg;
var items = result["property"];
for (var obj of propertyArg) {
	items.add(obj);
}
result["name"] = nameArg;
result["size"] = sizeArg;
result["description"] = descriptionArg;
if ((entityArg == null) || (entityArg instanceof VclReference)) {
	result["entity"] = entityArg;
} else {
	result["entity"] = entityArg.getReference();
}
return result;
}
}
