/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function getOrganizationFromVM(vm?: vCloud.VM): vCloud.Organization {return vm.parent.parent.parent;
}
}
