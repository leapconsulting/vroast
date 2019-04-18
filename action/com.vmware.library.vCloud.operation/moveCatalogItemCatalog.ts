/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.operation {
export function moveCatalogItemCatalog(targetEntityArg?: vCloud.Catalog, nameArg?: string, descriptionArg?: string, sourceRefArg?: vCloud.CatalogItem): vCloud.Task {// WARNING: Auto generated code. Please, do not edit this code.
return targetEntityArg.moveCatalogItem(nameArg,descriptionArg,sourceRefArg);
}
}
