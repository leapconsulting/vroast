/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Organization {
export function getAdminOrganizationFromCatalog(catalog?: vCloud.Catalog): vCloud.AdminOrganization {if (catalog == null) return null;

return catalog.parent.toAdminObject();
}
}
