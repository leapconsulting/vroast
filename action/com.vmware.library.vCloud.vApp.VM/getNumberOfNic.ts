/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function getNumberOfNic(vm?: vCloud.VM, max?: number): number {var nics = vm.getNetworkConnectionSection().networkConnection.size();

if (nics > max) {
	nics = max;
}

return nics;
}
}
