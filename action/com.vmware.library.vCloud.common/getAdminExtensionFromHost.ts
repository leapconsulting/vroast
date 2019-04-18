/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common {
export function getAdminExtensionFromHost(host?: vCloud.Host): vCloud.HostAdminExtension {return host.toAdminObject().toAdminExtensionObject();
}
}
