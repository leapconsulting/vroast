/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyCatalog(targetEntityArg?: vCloud.Catalog, dateCreatedArg?: any, descriptionArg?: string, isPublishedArg?: boolean, nameArg?: string, operationKeyArg?: string, ownerArg?: any, versionNumberArg?: number): vCloud.Catalog {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	targetEntityArg["owner"] = ownerArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (isPublishedArg != null) {
	targetEntityArg["isPublished"] = isPublishedArg;
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
if (descriptionArg != null) {
	targetEntityArg["description"] = descriptionArg;
}
return targetEntityArg;
}
}
