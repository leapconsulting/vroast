/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.CatalogItem {
export function getOrganizationFromCatalog(catalog?: vCloud.Catalog): vCloud.Organization {return catalog.parent;
}
}
