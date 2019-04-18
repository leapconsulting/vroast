/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.entities {
export function modifyAdminCatalog(targetEntityArg?: vCloud.AdminCatalog, catalogStorageProfilesArg?: any, dateCreatedArg?: any, descriptionArg?: string, externalCatalogSubscriptionParamsArg?: any, isPublishedArg?: boolean, nameArg?: string, operationKeyArg?: string, ownerArg?: any, publishExternalCatalogParamsArg?: any, versionNumberArg?: number): vCloud.AdminCatalog {// WARNING: Auto generated code. Please, do not edit this code.
if (ownerArg != null) {
	targetEntityArg["owner"] = ownerArg;
}
if (operationKeyArg != null) {
	targetEntityArg["operationKey"] = operationKeyArg;
}
if (isPublishedArg != null) {
	targetEntityArg["isPublished"] = isPublishedArg;
}
if (publishExternalCatalogParamsArg != null) {
	targetEntityArg["publishExternalCatalogParams"] = publishExternalCatalogParamsArg;
}
if (catalogStorageProfilesArg != null) {
	targetEntityArg["catalogStorageProfiles"] = catalogStorageProfilesArg;
}
if (externalCatalogSubscriptionParamsArg != null) {
	targetEntityArg["externalCatalogSubscriptionParams"] = externalCatalogSubscriptionParamsArg;
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
