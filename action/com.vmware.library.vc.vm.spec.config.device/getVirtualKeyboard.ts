/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vc.vm.spec.config.device {
export function getVirtualKeyboard(backing?: any, connectable?: any, controllerKey?: number, deviceInfo?: any, key?: number, unitNumber?: number): any {var device = new VcVirtualKeyboard();
device = com.vmware.library.vc.vm.spec.config.device.getVirtualDevice(device,backing,connectable,controllerKey,deviceInfo,key,unitNumber);
return device;
}
}
