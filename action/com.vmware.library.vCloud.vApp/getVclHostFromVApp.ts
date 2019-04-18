/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function getVclHostFromVApp(vApp?: vCloud.VApp): vCloud.Host {if (vApp == null) return null;
return vApp.parent.parent.parent;
}
}
