/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Organization {
export function getAdminExtensionFromOrganization(organization?: vCloud.Organization): vCloud.HostAdminExtension {return organization.parent.toAdminObject().toAdminExtensionObject();
}
}
