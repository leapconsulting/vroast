/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyCatalogItem(targetEntityArg?: vCloud.CatalogItem, dateCreatedArg?: any, descriptionArg?: string, entityArg?: any, nameArg?: string, operationKeyArg?: string, sizeArg?: number, versionNumberArg?: number): vCloud.CatalogItem {// WARNING: Auto generated code. Please, do not edit this code.
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (dateCreatedArg != null) {
	targetEntityArg["dateCreated"] = dateCreatedArg;
}
if (versionNumberArg != null) {
	targetEntityArg["versionNumber"] = versionNumberArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (sizeArg != null) {
	targetEntityArg["size"] = sizeArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (entityArg != null) {
	if (entityArg instanceof VclReference) {
	    targetEntityArg["entity"] = entityArg;
	} else {
	    targetEntityArg["entity"] = entityArg.getReference();
	}
}
return targetEntityArg;
}
}
