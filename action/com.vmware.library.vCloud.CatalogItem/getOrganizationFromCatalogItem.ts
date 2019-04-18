/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.CatalogItem {
export function getOrganizationFromCatalogItem(catalogItem?: vCloud.CatalogItem): vCloud.Organization {return catalogItem.parent.parent;
}
}
