/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function getVdcFromVApp(vApp?: vCloud.VApp): vCloud.Vdc {if (vApp == null) {
	return null;
}
return vApp.parent;
}
}
