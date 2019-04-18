/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Vdc {
export function getOrganizationFromVdc(vdc?: vCloud.Vdc): vCloud.Organization {return vdc.parent;
}
}
