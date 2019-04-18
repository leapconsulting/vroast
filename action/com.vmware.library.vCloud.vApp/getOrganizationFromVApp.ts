/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function getOrganizationFromVApp(vApp?: vCloud.VApp): vCloud.Organization {if (vApp == null) return null;
return vApp.parent.parent;
}
}
