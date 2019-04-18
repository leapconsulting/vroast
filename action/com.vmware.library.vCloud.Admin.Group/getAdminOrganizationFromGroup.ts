/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Group {
export function getAdminOrganizationFromGroup(group?: vCloud.Group): vCloud.HostAdmin {return group.parent;
}
}
