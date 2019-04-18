/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.power {
export function shutdownVM(vm?: VC.VirtualMachine, timeout?: number, polling?: number): void {if (timeout == null || timeout < 0) {
	timeout = 0
}
timeout = timeout * 60;
var status = vm.runtime.powerState.value;
vm.shutdownGuest() ;
while(timeout > 0){
	var status = vm.runtime.powerState.value;
	if(status == "poweredOff"){
		break;
	}
	timeout -= polling;
	if (timeout <= 0) {
		throw "Timeout: VM " + vm.name + "is still power on";
	}
	System.sleep(polling * 1000);
}
}
}
