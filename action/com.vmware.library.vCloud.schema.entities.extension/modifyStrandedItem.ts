/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities.extension {
export function modifyStrandedItem(targetEntityArg?: vCloud.StrandedItem, deletionDateArg?: any, descriptionArg?: string, entityTypeArg?: string, errorMessageArg?: string, nameArg?: string, operationKeyArg?: string, strandedItemVimObjectsArg?: any): vCloud.StrandedItem {// WARNING: Auto generated code. Please, do not edit this code.
if (deletionDateArg != null) {
	targetEntityArg["deletionDate"] = deletionDateArg;
}
if (entityTypeArg != null) {
	targetEntityArg["entityType"] = entityTypeArg;
}
if (strandedItemVimObjectsArg != null) {
	targetEntityArg["strandedItemVimObjects"] = strandedItemVimObjectsArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (nameArg != null) {
	targetEntityArg["name"] = nameArg;
}
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
if (errorMessageArg != null) {
	targetEntityArg["errorMessage"] = errorMessageArg;
}
return targetEntityArg;
}
}
