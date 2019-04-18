/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.Admin.Vdc {
export function getVclHostFromVdc(vdc?: vCloud.Vdc): vCloud.Host {if (vdc == null) return null;
return vdc.parent.parent;
}
}
