/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp Template {
export function getOrganizationFromVAppTemplate(vappTemplate?: vCloud.VAppTemplate): vCloud.Organization {return vappTemplate.parent.parent;
}
}
