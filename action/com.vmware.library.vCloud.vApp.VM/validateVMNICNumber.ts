/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM {
export function validateVMNICNumber(vm?: vCloud.VM, nicNum?: number): string {var nicCount = com.vmware.library.vCloud.vApp.VM.getNumberOfNic(vm,100);

if (nicNum >= 0 && nicNum < nicCount) return null;
return "Invalid nic number, must be between 0 and " + nicCount + ".";
}
}
