/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Role {
export function getAdminHostFromRole(role?: vCloud.Role): vCloud.HostAdmin {return role.parent;
}
}
