/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function listVmVAppNetworks(vm?: vCloud.VM): Array<string> {return com.vmware.library.vCloud.vApp.listVAppNetworks(vm.parent);
}
}
