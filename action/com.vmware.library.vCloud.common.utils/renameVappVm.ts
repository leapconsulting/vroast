/// <reference path="./../../includes.d.ts"/>

namespace com.vmware.library.vCloud.common.utils {
export function renameVappVm(vAppVm?: vCloud.VM, newName?: string): vCloud.Task {vAppVm.name = newName;
var task = vAppVm.update();
vAppVm.updateInternalState();
vAppVm.parent.updateInternalState(); 
return task;
}
}
