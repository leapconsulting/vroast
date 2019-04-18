/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createAdminCatalogParams(catalogItemsArg?: any, catalogStorageProfilesArg?: any, dateCreatedArg?: any, descriptionArg?: string, externalCatalogSubscriptionParamsArg?: any, isPublishedArg?: boolean, nameArg?: string, operationKeyArg?: string, ownerArg?: any, publishExternalCatalogParamsArg?: any, versionNumberArg?: number): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclAdminCatalogParams();
result["owner"] = ownerArg;
result["operationKey"] = operationKeyArg;
result["isPublished"] = isPublishedArg;
result["publishExternalCatalogParams"] = publishExternalCatalogParamsArg;
result["catalogStorageProfiles"] = catalogStorageProfilesArg;
result["externalCatalogSubscriptionParams"] = externalCatalogSubscriptionParamsArg;
result["dateCreated"] = dateCreatedArg;
result["versionNumber"] = versionNumberArg;
result["catalogItems"] = catalogItemsArg;
result["name"] = nameArg;
result["description"] = descriptionArg;
return result;
}
}
