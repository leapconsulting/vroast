/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Organization {
export function getAdminOrganizationFromOrganization(organization?: vCloud.Organization): vCloud.AdminOrganization {return organization.toAdminObject();
}
}
