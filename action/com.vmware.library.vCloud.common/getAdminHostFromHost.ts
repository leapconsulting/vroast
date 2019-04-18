/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function getAdminHostFromHost(host?: vCloud.Host): vCloud.HostAdmin {return host.toAdminObject();
}
}
