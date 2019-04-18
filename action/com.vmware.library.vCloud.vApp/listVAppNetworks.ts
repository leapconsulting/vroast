/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function listVAppNetworks(vApp?: vCloud.VApp): Array<string> {if (vApp == null) return null;
return vApp.getNetworkNames();
}
}
