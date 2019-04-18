/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Organization {
export function getAdminOrganizationFromVApp(vApp?: vCloud.VApp): vCloud.AdminOrganization {if (vApp == null) return null;

return vApp.parent.parent.toAdminObject();
}
}
