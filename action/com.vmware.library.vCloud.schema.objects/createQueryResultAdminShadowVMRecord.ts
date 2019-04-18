/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.schema.objects {
export function createQueryResultAdminShadowVMRecord(datastoreNameArg?: string, isBusyArg?: boolean, isDeletedArg?: boolean, isPublishedArg?: boolean, metadataArg?: any, nameArg?: string, orgArg?: string, primaryVAppNameArg?: string, primaryVAppTemplateArg?: string, primaryVMArg?: string, primaryVMCatalogArg?: string, primaryVMOwnerArg?: string, primaryVmNameArg?: string, shadowVAppArg?: string, statusArg?: string, vcNameArg?: string): any {// WARNING: Auto generated code. Please, do not edit this code.
var result = new VclQueryResultAdminShadowVMRecord();
result["org"] = orgArg;
result["metadata"] = metadataArg;
result["isBusy"] = isBusyArg;
result["isDeleted"] = isDeletedArg;
result["vcName"] = vcNameArg;
result["datastoreName"] = datastoreNameArg;
result["isPublished"] = isPublishedArg;
result["primaryVAppName"] = primaryVAppNameArg;
result["primaryVAppTemplate"] = primaryVAppTemplateArg;
result["primaryVMCatalog"] = primaryVMCatalogArg;
result["primaryVMOwner"] = primaryVMOwnerArg;
result["primaryVmName"] = primaryVmNameArg;
result["shadowVApp"] = shadowVAppArg;
result["primaryVM"] = primaryVMArg;
result["name"] = nameArg;
result["status"] = statusArg;
return result;
}
}
