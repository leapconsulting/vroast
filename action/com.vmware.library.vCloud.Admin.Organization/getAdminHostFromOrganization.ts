/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Organization {
export function getAdminHostFromOrganization(organization?: vCloud.Organization): vCloud.HostAdmin {return organization.parent.toAdminObject();
}
}
