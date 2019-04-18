/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Group {
export function getAdminHostFromGroup(group?: vCloud.Group): vCloud.HostAdmin {return group.parent.parent.toAdminObject();
}
}
