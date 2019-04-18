/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function calculateRasdInstanceId(vm?: vCloud.VM): string {var items = vm.getVirtualHardwareSection().item.enumerate();
var maxInstanceId = 0;
for (var i = 0; i < items.length; i++) {
	var instanceId = items[i].instanceID.value * 1;
	maxInstanceId = Math.max(instanceId, maxInstanceId);	
}
return maxInstanceId + 1;
}
}
