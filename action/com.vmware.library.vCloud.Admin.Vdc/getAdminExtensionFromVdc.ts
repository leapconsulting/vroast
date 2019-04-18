/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Vdc {
export function getAdminExtensionFromVdc(vdc?: vCloud.Vdc): vCloud.HostAdmin {return vdc.parent.parent.toAdminObject().toAdminExtensionObject();
}
}
