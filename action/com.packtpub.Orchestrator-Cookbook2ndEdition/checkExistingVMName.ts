/// <reference path="./../../includes.d.ts"/>

namespace com.packtpub.Orchestrator-Cookbook2ndEdition {
export function checkExistingVMName(vmName?: string): string {System.log("entry "+vmName);
allVMs=com.vmware.library.vc.vm.getAllVMs();
for (var vm of allVMs) {
	System.log(vm.name);
	if (vm.name.toUpperCase() == vmName.toUpperCase()) {
		return "A VM with the name "+vm.name+" allready exists";
		break;
	}
}
return null;
}
}
