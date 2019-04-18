/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.vApp.VM.Guest {
export function changeComputerName(vm?: vCloud.VM, computerName?: string): vCloud.Task {var getGuestCustomizationSection = vm.getGuestCustomizationSection();
getGuestCustomizationSection.computerName = computerName;
return vm.updateSection(getGuestCustomizationSection);

}
}
