/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp {
export function getVmsFromVApp(vApp?: vCloud.VApp): Array<vCloud.VM> {if (vApp == null) {
	return null;
}
return vApp.getChildrenVms();
}
}
